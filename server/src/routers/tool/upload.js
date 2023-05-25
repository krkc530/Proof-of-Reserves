import express from "express";
import {connection} from "../../server.js";
import config from "../../config.js";
import legogroth from '../../../napirs-legogroth16/index.js';
import proofOfReserveContract from "../../web3/contract.js";

const router = express.Router();

router.get('/', (req, res) => {

    check = false;
    console.log("new user flag", req.body);

    // proof,cm,cmkey 생성
    legogroth.proof(req.body['index'], req.body['value'], req.body['seed']);

    // DB에 저장
    connection.query('INSERT INTO list (id,value,random) VALUES (?,?,?)', [
        req.body['index'], req.body['value'], req.body['seed']
    ], (err, result) => {
        if (err) {
            console.log(err);
            return;
        } else {
            check = true;
        }
        console.log(result);
    })

    // contract
    proofOfReserveContract.uploadCommitment(
        config.homePath + 'Proof_vk/proof_' + req.body['index'] + '.json'
    );

    res.send({flag: check});

})

export default router;