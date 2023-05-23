// SPDX-License-Identifier: LGPL-3.0+
pragma solidity >= 0.8.0;

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
        uint256[] memory input_proof = new uint256[](10);
        for (uint256 i = 0 ; i < 10; i++) {
            input_proof[i] = proof[i];
        }
        require(ccGroth16BN128._verify(verifyingKey, input_proof), 'verify fail');
        return true;
    }

    function get_vk()public view returns(uint256[] memory){
        return verifyingKey;
    }
}