import config from "./config.js";
import bodyParser from "body-parser";
import express from "express";
import mysql from 'mysql2';
import cors from 'cors';
import rootRouter from "./routers/index.js";
import porContract from "./web3/index.js";
import legogroth from '../napirs-legogroth16/index.js';

export const connection = mysql.createConnection(
    {'host': config.DB.host, 'user': config.DB.user, 'password': config.DB.password, 'database': 'POR'}
);

async function set_id_value(value, id) {


    var seed = Math.floor(Math.random() * 10000);

    legogroth.proof(String(id), String(value), seed);

    connection.query(
        'UPDATE list SET value = ?,random = ? WHERE id = ?',[
        value,
        seed,
        id,],
        (err, result) => {
            if (err) {
                console.log('error in set_id_value funcion');
                console.log(err);
                return;
            }
        }
    )

    // contract
    await porContract.uploadCommitment(
        config.PATH.proofPath + 'Proof_vk/proof_' + String(id) + '.json'
    );
}

const server = async () => {

    const app = express();
    app.use(bodyParser.json());
    app.use(cors({origin: '*'}));

    app.get('/', (req, res) => {
        res.send('por is best');
    })

    app.use('/', rootRouter);

    app.listen(8000, () => {
        console.log('server start on 8000')
    });

    await set_id_value(12, 1);
    await set_id_value(124, 2);
    await set_id_value(4523, 3);
    await set_id_value(1324, 4);
    await set_id_value(1324, 5);
    legogroth.totalPedCm(['1','2','3','4','5'])
    await porContract.updateTotalValue();
}

export default server;
