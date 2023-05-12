// SPDX-License-Identifier: LGPL-3.0+
pragma solidity ^0.8.2;

import "./PairingBn128.sol";


library ccGroth16BN128 {

    uint256 internal constant _PRIME_R =
        // solhint-disable-next-line max-line-length
        21888242871839275222246405745257275088548364400416034343698204186575808495617;

    // BN128 에서는 G1이 2개의 uint256로 구성되어 있고, G2는 4개의 uint256로 구성되어 있다.

    // VerifyingKey : 
    //      uint256[2] alpha    : G_1
    //      uint256[2] beta     : G_2
    //      uint256[2] gamma    : G_2
    //      uint256[2] delta    : G_2

    // Proof : 
    //      uint256[2] A    : G_1
    //      uint256[4] B    : G_2
    //      uint256[2] C    : G_1
    //      uint256[2] D    : G_1

    // Verification equation:
    //      A*B = alpha*beta + C*dela + D*gamma 

    // ccSNARK

    function _verify(
        uint256[] storage vk,
        uint256[] memory proof
    )
        internal
        returns (bool)
    {
        require(proof.length == 10, "Invalid proof length");
        require(vk.length ==  14, "Invalid vk length");
    }
}