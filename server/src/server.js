import config from "./config.js";
import bodyParser from "body-parser";
import express from "express";
import mysql from 'mysql2';
import cors from 'cors';
import rootRouter from "./routers/index.js";
import porContract from "./web3/index.js";

export const connection = mysql.createConnection(
    {'host': '127.0.0.1', 'user': 'root', 'password': '1157310', 'database': 'POR'}
);

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

}

export default server;
