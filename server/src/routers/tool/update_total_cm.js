import legogroth from '../../../napirs-legogroth16/index.js';
import {connection} from '../../server.js';
import express from "express";
import porContract from '../../web3/index.js';
import config from '../../config.js';

const router = express.Router();

router.get('/', (req, res) => {

    connection.query('SELECT COUNT(*) FROM list', (err, result) => {

        var total_usr_num = result[0]['COUNT(*)'];

        connection.query('SELECT value,random FROM list', (err, result) => {

            var total_value = 0;
            var total_random = 0;

            var usr_list = new Array(total_usr_num - 1);

            for (let i = 0; i < total_usr_num - 1; i++) {
                usr_list[i] = String(i + 1);
                total_value = total_value + result[i + 1].value;
                total_random = total_random + result[i + 1].random;
            }

            connection.query(
                'UPDATE list SET value = ?,random = ? WHERE id = 0',
                [total_value, total_random]
            )

            legogroth.totalPedCm(usr_list);
            legogroth.sigmaTotal();

            // porContract.uploadCommitment(     config.proofPath + 'Proof_vk/proof_0.json'
            // );

            res.send({value: total_value});

        })

    })

})

export default router;