import express from "express";
import legogroth from "../../../napirs-legogroth16/index.js";
import config from "../../config.js";
import { connection } from "../../server.js";
import porContract from "../../web3/index.js";

const router = express.Router();

router.get("/:id/:asset_idx/:value", (req, res) => {
  console.log(req.params);

  const check_num = BigInt(req.params.value);

  if (check_num < 0 || check_num > 2n ** 64n) {
    res.send({
      flag: false,
    });
    return;
  }

  const assetIdx = req.params.asset_idx;

  //id 랑 value

  connection.query(
    "SELECT COUNT(*) FROM user_list WHERE asset_idx = ?",
    [assetIdx],
    (err, result) => {
      var total_usr_num = result[0]["COUNT(*)"];

      console.log(Number(req.params.id), Number(total_usr_num));

      if (
        Number(req.params.id) >= Number(total_usr_num) ||
        Number(req.params.id) < 0
      ) {
        res.send({
          flag: false,
          msg: "wrong id",
        });
        return;
      }

      var seed = Math.floor(Math.random() * 10000);
      legogroth.proof(req.params.id, req.params.value, seed);

      connection.query(
        "UPDATE user_list SET value = ?,random = ? WHERE id = ? AND asset_idx = ?",
        [req.params.value, seed, req.params.id, assetIdx],
        async (err, result) => {
          var check = false;
          if (err) {
            console.log(err);
            return;
          } else {
            check = true;
          }
          // contract
          const receipt = await porContract.updateCommitment(
            assetIdx,
            Number(req.params.id),
            config.PATH.proofPath + "Proof_vk/proof_" + req.params.id + ".json"
          );
          console.log(receipt);

          connection.query(
            "SELECT COUNT(*) FROM user_list WHERE asset_idx = ?",
            [assetIdx],
            async (err, result) => {
              var total_usr_num = result[0]["COUNT(*)"];
              const usr_list = new Array(total_usr_num);
              for (let i = 0; i < total_usr_num; i++) {
                usr_list[i] = i.toString();
              }
              console.log(usr_list);
              legogroth.totalPedCm(usr_list);

              await porContract.updateTotalValue(assetIdx);

              res.send({
                flag: true,
              });
            }
          );
        }
      );
    }
  );
});
export default router;
