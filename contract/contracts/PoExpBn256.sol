// SPDX-License-Identifier: LGPL-3.0+

pragma solidity ^0.8.0;

// solhint-disable-next-line max-line-length

import "./PoExp.sol";

contract PoExpBn256 {
    uint256[] generator;

    event LogGenerator(uint256 X, uint256 Y);

    constructor(uint256 gX, uint256 gY, uint256 hX, uint256 hY) {
        generator = [uint256(gX), uint256(gY), uint256(hX), uint256(hY)];

        emit LogGenerator(generator[0], generator[1]);
        emit LogGenerator(generator[2], generator[3]);
    }

    function verifyBN256(
        uint256[] memory proof, // [tX, tY, s]
        uint256[] memory inputs // [v, yX, yY, cmX, cmY]
    ) public returns (bool) {
        return PoExp._verify(generator, proof, inputs);
    }
}

//[123, 8827710784402843497074752127110870416328048196504692375055403536558672029161,14100469679187876586471551400972345236109757246043953425821261877730884909556, 19263621320589790163778005780641931887909784061468896229411056951840424581655, 5737925828628455676908345223629317529932256734396490992797776017260879820684] 
