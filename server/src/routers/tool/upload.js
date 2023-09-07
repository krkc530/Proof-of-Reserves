import config from "../../config.js";
import express from "express";
import { connection } from "../../server.js";
import legogroth from "../../../napirs-legogroth16/index.js";
import porContract from "../../web3/index.js";

const router = express.Router();

router.get("/:asset_idx/:value", async (req, res) => {
  console.log(req.params.value);
  const check_num = BigInt(req.params.value);

  if (check_num < 0 || check_num > 2n ** 64n) {
    return res.send({ flag: false });
  }

  const assetIdx = req.params.asset_idx;
  var value = req.params.value;

  // proof,cm,cmkey 생성 Id check
  connection.query(
    "SELECT COUNT(*) FROM user_list WHERE asset_idx = ?",
    [assetIdx],
    (err, result) => {
      var check = false;
      let rand = Number(Math.floor(Math.random() * 10000)); // 32비트로 바꿔야함.
      var numUsers = result[0]["COUNT(*)"];

      legogroth.proof(String(numUsers), value, rand);

      // DB에 저장
      connection.query(
        "INSERT INTO user_list (id,asset_idx,value,random) VALUES (?,?,?,?)",
        [numUsers, assetIdx, Number(value), rand],
        async (err, result) => {
          console.log(err, result);
          if (err) {
            console.log(err);
            return;
          } else {
            check = true;
          }
          // contract
          await porContract.uploadCommitment(
            assetIdx,
            config.PATH.proofPath + "Proof_vk/proof_" + numUsers + ".json"
          );

          connection.query(
            "SELECT COUNT(*) FROM user_list WHERE asset_idx = ?",
            [assetIdx],
            async (err, result) => {
              try {
                var total_usr_num = result[0]["COUNT(*)"];
                const usr_list = new Array(total_usr_num);
                for (let i = 0; i < total_usr_num; i++) {
                  usr_list[i] = i.toString();
                }
                console.log(usr_list);
                legogroth.totalPedCm(usr_list);

                await porContract.updateTotalValue(assetIdx);
                res.send({ flag: check });
              } catch (error) {
                console.log(error);
                res.send({ flag: false });
              }
            }
          );
        }
      );
    }
  );
});

export default router;
