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
