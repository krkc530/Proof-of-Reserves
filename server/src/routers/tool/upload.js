import config from "../../config.js";
import express from "express";
import {connection} from "../../server.js";
import legogroth from '../../../napirs-legogroth16/index.js';
import porContract from "../../web3/index.js";

const router = express.Router();

router.get('/:value', async (req, res) => {
    console.log(req.params.value)
    const check_num = BigInt(req.params.value);

    if (check_num < 0 || check_num > (2n ** 64n)) {
        return res.send({flag: false})
    }

    var value = req.params.value;

    // proof,cm,cmkey 생성 Id check
    connection.query('SELECT COUNT(*) FROM list', (err, result) => {

        var check = false;
        let rand = Number(Math.floor(Math.random() * 10000)); // 32비트로 바꿔야함.
        var Id = String(result[0]['COUNT(*)']);

        legogroth.proof(Id, value, rand);

        // DB에 저장
        connection.query('INSERT INTO list (id,value,random) VALUES (?,?,?)', [
            Id, Number(value), rand
        ], async (err, result) => {
            console.log(err, result)
            if (err) {
                console.log(err);
                return;
            } else {
                check = true;
            }
            // contract
            await porContract.uploadCommitment(
                config.PATH.proofPath + 'Proof_vk/proof_' + Id + '.json'
            );

            connection.query('SELECT COUNT(*) FROM list', async (err, result) => {
                var total_usr_num = result[0]['COUNT(*)'];
                const usr_list = new Array(total_usr_num - 1);
                for (let i = 0; i < total_usr_num - 1; i++) {
                    usr_list[i] = (i+1).toString()
                }
                console.log(usr_list);
                legogroth.totalPedCm(usr_list);

                await porContract.updateTotalValue();
            })

            res.send({flag: check});
        })

    })

})

export default router;