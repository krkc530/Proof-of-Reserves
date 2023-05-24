import process from 'process';

let config = {
    homePath: '/Users/kim/Proof-of-Reserves/server/',

    testProvider: 'http://127.0.0.1:7545',

    EC_TYPE: 'EC_ALT_BN128',
}

export const initConfig = () => {
    config.homePath = process.env.PWD + '/';
}

export default config;