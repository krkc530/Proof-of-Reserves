import config from "./config.js";

import porContract from "./web3/index.js";

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
