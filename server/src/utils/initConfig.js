import config from '../config.js';

export const initConfig = () => {
    config.homePath = process.env.PWD + '/';
}