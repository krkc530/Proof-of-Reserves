import server from "./src/server.js";
import legogroth from './napirs-legogroth16/index.js'

legogroth.paramsBn128(Math.floor(Math.random() * 10000));
server();
