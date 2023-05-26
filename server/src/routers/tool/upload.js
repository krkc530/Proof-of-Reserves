import config from "../../config.js";
import express from "express";
import {connection} from "../../server.js";
import legogroth from '../../../napirs-legogroth16/index.js';
import porContract from "../../web3/index.js";

const router = express.Router();

router.get('/:value', (req, res) => {

    let check = false;
    var value = req.params.value;

    // proof,cm,cmkey 생성 Id check
    connection.query('SELECT COUNT(*) FROM list', (err, result) => {
        let rand = Number(Math.floor(Math.random() * 10000));
        var Id = String(result[0]['COUNT(*)']);

        legogroth.proof(Id, value, rand);

        // DB에 저장
        connection.query('INSERT INTO list (id,value,random) VALUES (?,?,?)', [
            Id, Number(value), rand
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
        porContract.uploadCommitment(
            config.proofPath + 'Proof_vk/proof_' + Id + '.json'
        );

    })

    var cm_list = porContract.getAllCommitments();

    res.send({
        cm: cm_list[Number(value)],
        flag: check
    });

})

export default router;