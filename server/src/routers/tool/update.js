import express from "express";
import {connection} from "../../server.js";
import {result} from "lodash";

const router = express.Router();

router.get('/', (req, res) => {

    check = false;
    console.log("update value", req.body);
    legogroth.proof(req.body['index'], req.body['value'], req.body['seed']);

    connection.query(
        'UPDATE list SET value = ?,seed = ? WHERE id = ?',
        req.body['value'],
        req.body['seed'],
        req.body['index'],
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
        config.homePath + 'Proof_vk/proof_' + req.body['index'] + '.json'
    );
    res.send({flag: check});

})
export default router;