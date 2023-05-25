import express from "express";
import legogroth from '../../../napirs-legogroth16/index.js';



const router = express.Router();

router.get('/',(req,res) => {

    legogroth.paramsBn128();

    res.send("good");

})

export default router;