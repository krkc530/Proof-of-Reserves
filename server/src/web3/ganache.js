import _ from 'lodash';
import fs from 'fs';
import Config from '../config.js';

const KeysJson = JSON.parse(fs.readFileSync(Config.homePath + '../contract/keys.json', 'utf-8'));
const AddressList = _.keys(_.get(KeysJson, 'private_keys'))

function getAddress(idx = 0) {
    try {
        return AddressList[idx]
    } catch (error) {
        return undefined
    }
}

function getPrivateKey(idx = 0) {
    try {
        return _.get(_.get(KeysJson, 'private_keys'), getAddress(idx))
    } catch (error) {
        return undefined
    }
}

const Ganache = {
    getAddress,
    getPrivateKey
}

export default Ganache