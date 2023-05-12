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
    // ccSNARK dose not have inputs, inputs are embeded at D

    function _verify(
        uint256[] storage vk,
        uint256[] memory proof
    )
        internal
        returns (bool)
    {
        require(proof.length == 10, "Invalid proof length");
        require(vk.length ==  14, "Invalid vk length");

        Pairing.G1Point memory A = Pairing.G1Point(proof[0], proof[1]);
        Pairing.G2Point memory B = Pairing.G2Point(proof[2], proof[3], proof[4], proof[5]);
        Pairing.G1Point memory C = Pairing.G1Point(proof[6], proof[7]);
        Pairing.G1Point memory D = Pairing.G1Point(proof[8], proof[9]);

        Pairing.G1Point memory alpha = Pairing.G1Point(vk[0], vk[1]);
        Pairing.G2Point memory beta = Pairing.G2Point(vk[2], vk[3], vk[4], vk[5]);
        Pairing.G2Point memory gamma = Pairing.G2Point(vk[6], vk[7], vk[8], vk[9]);
        Pairing.G2Point memory delta = Pairing.G2Point(vk[10], vk[11], vk[12], vk[13]);

        return Pairing.pairingProd4(
            A,
            B,
            alpha,
            beta,
            C,
            delta,
            D,
            gamma
        );
    }
}