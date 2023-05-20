// SPDX-License-Identifier: LGPL-3.0+
pragma solidity ^0.8.0;

import "./ccGroth16VerifyBn128.sol";

contract ProofOfReservesContract {

    uint256[] private verifyingKey;

    constructor(
        uint256[] memory _vk
    ) {
        verifyingKey = _vk;
    }

    // constructor(){}

    function test_verify(
        uint256[] memory proof
    ) 
        public
        payable
        returns (bool)
    {
        
        return ccGroth16BN128._verify(verifyingKey, proof);
    }

    function get_vk()public view returns(uint256[] memory){
        return verifyingKey;
    }
}