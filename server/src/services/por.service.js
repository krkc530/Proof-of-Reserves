import _ from "lodash";
import DbInstance from "../../database";

import SnarkServices from "./snark.service";
import ContractServices from "./contract.service";
import UsersServices from "./users.service";
import UserAssetsServices from "./userAssets.service";
import AssetsServices from "./assets.service";
import Curve, { WeierstrassCurve } from "../crypto/curve";
import mimc from "../crypto/mimc";

const generatePoKE = async (assetId) => {
  const userIds = await UsersServices.getAllUserIds();

  const proofIds = [];
  for (const userId of userIds) {
    const proofId = `${userId}_${assetId}`;
    proofIds.push(proofId);
  }

  SnarkServices.generateTotalKey(proofIds);

  const proof = SnarkServices.generateTotalProof();

  return proof;
};

const verifyPoKE = async (totalCommit, totalValue, proof) => {
  const weierstrassCurve = new WeierstrassCurve();
  const mimc7 = new mimc.MiMC7();

  const cm = new Curve.AffinePoint(
    _.get(totalCommit, "0"),
    _.get(totalCommit, "1")
  );
  let { g, h } = SnarkServices.getPublicParameters();
  g = new Curve.AffinePoint(g.x, g.y);
  h = new Curve.AffinePoint(h.x, h.y);
  const g_v = weierstrassCurve.scalarMulG1(g, BigInt(totalValue));

  // y = cm/g^v = h^r
  const y = weierstrassCurve.subAffineG1(cm, g_v);

  // parse proof
  const { tx, ty, s } = proof;
  const t = new Curve.AffinePoint(tx, ty);

  const c = mimc7.hash(h.x.toString(16), y.x.toString(16), t.x.toString(16));

  const hs = weierstrassCurve.scalarMulG1(h, s);
  const yc = weierstrassCurve.scalarMulG1(y, BigInt(`0x${c}`));
  const t_yc = weierstrassCurve.addAffineG1(t, yc);

  return hs.x === t_yc.x && hs.y === t_yc.y;
};

const verifyCommitment = (value, random, commit) => {
  const c = createCommitFrom(value, random);
  const cm = new Curve.AffinePoint(_.get(commit, "0"), _.get(commit, "1"));

  return c.x === cm.x && c.y === cm.y;
};

const createCommitFrom = (value, random) => {
  const weierstrassCurve = new WeierstrassCurve();
  // get g, h
  let { g, h } = SnarkServices.getPublicParameters();
  g = new Curve.AffinePoint(g.x, g.y);
  h = new Curve.AffinePoint(h.x, h.y);

  const g_v = weierstrassCurve.scalarMulG1(g, BigInt(value));
  const h_r = weierstrassCurve.scalarMulG1(h, BigInt(random));
  // c = g^v*h^r
  const c = weierstrassCurve.addAffineG1(g_v, h_r);

  return c;
};

const commitToStr = (commit) => {
  if (typeof commit.x !== "bigint" && typeof commit.y !== "bigint") {
    throw new Error("[PoRService] Invalid commit");
  }
  return [`0x${commit.x.toString(16)}`, `0x${commit.y.toString(16)}`];
};

const getPor = async (assetId) => {
  const totalCommit = await ContractServices.getTotalCommitment(assetId);
  const totalBalance = await AssetsServices.getAssetBalance(assetId);

  // PoKE verify
  const proof = await generatePoKE(assetId);
  console.debug("[PoRService] PoKE:", proof);

  if (typeof totalBalance !== "string") {
    throw new Error("[PoRService] Invalid input");
  }
  const isCoincided = await verifyPoKE(totalCommit, totalBalance, proof);

  return {
    isCoincided,
    totalAsset: totalBalance,
  };
};

const getPorForUser = async (userId, assetId) => {
  const { isCoincided, totalAsset } = await getPor(assetId);

  // user cm is included && cm is correct
  const { balance, random, commitment } = await UserAssetsServices.getUserAsset(
    userId,
    assetId
  );
  if (typeof balance !== "string" || typeof random !== "string") {
    throw new Error("[PoRService] Invalid input");
  }
  const commitments = await ContractServices.getAllCommitments(assetId);
  // TODO replace to this
  //   const myCommitment = commitToStr(createCommitFrom(balance, random));
  const isIncluded = commitments.some((e) => {
    if (e[0] === commitment[0] && e[1] === commitment[1]) {
      return true;
    }
  });

  return {
    isIncluded,
    isCoincided,
    myCommitment: commitment,
    commitments,
    totalAsset,
    myAsset: balance,
  };
};

const PorService = async (query) => {
  const assetId = _.get(query, "asset_id");
  const userId = _.get(query, "key");

  let por = userId
    ? await getPorForUser(userId, assetId)
    : await getPor(assetId);
  const { name, logoUrl, unit } = await AssetsServices.getAsset(assetId);

  return {
    ...por,
    name,
    logoUrl,
    unit,
  };
};

export default PorService;
