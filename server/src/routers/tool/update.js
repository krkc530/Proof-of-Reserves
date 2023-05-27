import express from "express";
import {connection} from "../../server.js";
import legogroth from '../../../napirs-legogroth16/index.js';
import config from "../../config.js";
import porContract from "../../web3/index.js";

const router = express.Router();

router.get('/:id/:value', (req, res) => {

    console.log(req.params);

    const check_num = BigInt(req.params.value);

    if (check_num < 0 || check_num > (2n ** 64n)) {
        res.send({flag: false})
        return
    }

    //id 랑 value

    var seed = Math.floor(Math.random() * 10000);
    legogroth.proof(req.params.id, req.params.value, seed);

    connection.query('UPDATE list SET value = ?,random = ? WHERE id = ?', [
        req.params.value, seed, req.params.id
    ], async (err, result) => {
        var check = false;
        if (err) {
            console.log(err);
            return;
        } else {
            check = true;
        }
        // contract
        await porContract.updateCommitment(
            Number(req.params.id) - 1,
            config.PATH.proofPath + 'Proof_vk/proof_' + req.params.id + '.json'
        );


        res.send({
            flag : check
        });
    })
})
export default router;