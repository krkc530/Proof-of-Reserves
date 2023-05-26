import config from '../config.js';

export const initConfig = () => {
    config.homePath = process.env.PWD + '/';
    config.proofPath = config.homePath + 'napirs-legogroth16/json/';
}