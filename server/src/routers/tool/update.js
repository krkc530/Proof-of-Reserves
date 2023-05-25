import express from "express";
import {connection} from "../../server.js";
import legogroth from '../../../napirs-legogroth16/index.js';
import proofOfReserveContract from "../../web3/contract.js";
import config from "../../config.js";


const router = express.Router();

router.get('/:id/:value', (req, res) => {

    //id 랑 value

    check = false;
    console.log("update value", req.params);
    legogroth.proof(req.params['id'], req.params['value'],getRandomint(1,10000));

    connection.query(
        'UPDATE list SET value = ?,seed = ? WHERE id = ?',
        req.body['value'],
        getRandomint(1,10000),
        req.params['id'],
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
    proofOfReserveContract.uploadCommitment(
        config.proofPath + 'Proof_vk/proof_' + req.params['index'] + '.json'
    );
    var cm_list = proofOfReserveContract.getAllCommitments();

    res.send({
        cm : cm_list[Number(req.params['id'])]
    });
})
export default router;