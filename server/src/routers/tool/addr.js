import express from "express";
import porContract from "../../web3";

const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        AddressL1 : porContract.AddressL1,
        AddressL2 : porContract.AddressL2
    });
})

export default router;