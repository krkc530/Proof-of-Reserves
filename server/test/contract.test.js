import config from "../src/config.js";
import porContract from "../src/web3/index.js";
import legogroth from '../napirs-legogroth16/index.js';
import mysql from 'mysql2';

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

const getRandomValue = () => {
    return Math.floor(Math.random() * 1000000);
}

const ACCOUNT_MAX = 5000

describe("test contract", () => {
    it("1", async () => {
        
        for (let i=1; i<=ACCOUNT_MAX; i++){
            await set_id_value(getRandomValue(), 1)
            if(i%100 == 0) console.log( await porContract.getAllCommitments(), i)
        }

        // await set_id_value(getRandomValue(), 1);
        // await set_id_value(124, 2);
        // await set_id_value(4523, 3);
        // await set_id_value(1324, 4);
        // await set_id_value(1324, 5);
        // legogroth.totalPedCm(['1','2','3','4','5'])

        // const receipt = await porContract.updateTotalValue();
        // console.log(receipt);
        // console.log(await porContract.getTotalValue())
        connection.destroy();
    }).timeout(9000000000000)
})