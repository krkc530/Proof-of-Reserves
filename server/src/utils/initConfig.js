import config from '../config.js';

export const initConfig = () => {
    config.PATH.homePath = process.env.PWD + '/';
    config.PATH.proofPath = config.PATH.homePath + 'napirs-legogroth16/json/';
}