import express from "express";
import {connection} from "../../server.js";
import legogroth from '../../../napirs-legogroth16/index.js';
import config from "../../config.js";
import porContract from "../../web3/index.js";

const router = express.Router();

router.get('/:id/:value', (req, res) => {

    const check_num = BigInt(req.params.value);

    if (check_num < 0 || check_num > (2n ** 64n)) {
        res.send({flag: false})
        return
    }

    //id 랑 value

    check = false;
    console.log("update value", req.params);
    legogroth.proof(
        req.params.id,
        req.params.value,
        Math.floor(Math.random() * 10000)
    );

    connection.query(
        'UPDATE list SET value = ?,seed = ? WHERE id = ?',
        req.params.value,
        Math.floor(Math.random() * 10000),
        req.params.id,
        (err, result) => {
            if (err) {
                console.log(err);
                return;
            } else {
                check = true;
            }
            console.log(result);
        }
    )

    // contract
    porContract.uploadCommitment(
        config.proofPath + 'Proof_vk/proof_' + req.params.id + '.json'
    );
    var cm_list = porContract.getAllCommitments();

    res.send({
        cm: cm_list[Number(req.params['id'])]
    });
})
export default router;