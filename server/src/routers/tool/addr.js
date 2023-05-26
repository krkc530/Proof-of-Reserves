import express from "express";
import porContract from "../../web3";

const router = express.Router();

router.get('/', (req, res) => {

    var Address = porContract.Addr;
    console.log('addr flag1 ',Address);

    res.send({Addr: Address});

})

export default router;