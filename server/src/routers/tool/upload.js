import config from "../../config.js";
import express from "express";
import {connection} from "../../server.js";
import legogroth from '../../../napirs-legogroth16/index.js';
import proofOfReserveContract from "../../web3/contract.js";

const router = express.Router();

router.get('/:value', (req, res) => {


    let check = false;
    console.log("new user flag", req.body);

    // proof,cm,cmkey 생성

    // Id check
    let Id;
    let rand = getRandomint(1,10000);
    connection.query('SELECT COUNT(*) FROM list',(err,result) => {
        Id = result;
    })
    legogroth.proof(Id.toString(), req.params['value'], rand);

    // DB에 저장
    connection.query('INSERT INTO list (id,value,random) VALUES (?,?,?)', [
        Id, Number(req.params['value']), rand
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
        config.homePath + 'Proof_vk/proof_' + Id + '.json'
    );

    var cm_list = proofOfReserveContract.getAllCommitments();

    res.send({
        cm : cm_list[Number(req.params['id'])],
        flag : check
    });

})

export default router;