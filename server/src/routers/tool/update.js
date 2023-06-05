import express from "express";
import legogroth from '../../../napirs-legogroth16/index.js';
import config from "../../config.js";
import {
    connection
} from "../../server.js";
import porContract from "../../web3/index.js";

const router = express.Router();

router.get('/:id/:value', (req, res) => {

    console.log(req.params);

    const check_num = BigInt(req.params.value);

    if (check_num < 0 || check_num > (2n ** 64n)) {
        res.send({
            flag: false
        })
        return
    }

    //id 랑 value

    connection.query('SELECT COUNT(*) FROM list', (err, result) => {

        var total_usr_num = result[0]['COUNT(*)'];

        console.log(Number(req.params.id), Number(total_usr_num));

        if (Number(req.params.id) > Number(total_usr_num)) {
            res.send({
                flag: false,
                msg: "wrong id"
            })
            return
        }

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
            const receipt = await porContract.updateCommitment(
                Number(req.params.id) - 1,
                config.PATH.proofPath + 'Proof_vk/proof_' + req.params.id + '.json'
            );
            console.log(receipt);

            connection.query('SELECT COUNT(*) FROM list', async (err, result) => {
                var total_usr_num = result[0]['COUNT(*)'];
                const usr_list = new Array(total_usr_num - 1);
                for (let i = 0; i < total_usr_num - 1; i++) {
                    usr_list[i] = (i + 1).toString()
                }
                console.log(usr_list);
                await legogroth.totalPedCm(usr_list);

                await porContract.updateTotalValue();
            })

        })
    })
})
export default router;