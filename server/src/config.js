<<<<<<< HEAD
export default {
  "homePath": "/Users/kim/Proof-of-Reserves/server/",
  "testProvider": "http://127.0.0.1:7545",
  "EC_TYPE": "EC_ALT_BN128"
}
=======
import process from 'process';

let config = {
    homePath: '/Users/kimsw/for_por/Proof-of-Reserves/server/napirs-legogroth16/json/',

    testProvider: 'http://127.0.0.1:7545',

    EC_TYPE: 'EC_ALT_BN128'
}

export const initConfig = () => {
    config.homePath = process.env.PWD + '/';
}

export default config;
>>>>>>> 5ef2958eeb123cb02ec287c7c6827a045b63a6e5
