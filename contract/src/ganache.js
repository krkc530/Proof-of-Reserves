const fs = require('fs');
const _ = require('lodash');

const KeysJson  = JSON.parse(fs.readFileSync(__dirname + '/../keys.json', 'utf-8'));
const AddressList  = _.keys(_.get(KeysJson, 'private_keys'))

function getAddress(idx=0) {
    try {
        return AddressList[idx]
    } catch (error) {
        return undefined
    }
}

function getPrivateKey(idx=0) {
    try {
        return _.get(_.get(KeysJson, 'private_keys'), getAddress(idx))
    } catch (error) {
        return undefined
    }
}

module.exports = {
    getAddress,
    getPrivateKey,
}