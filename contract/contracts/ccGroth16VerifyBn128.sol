// SPDX-License-Identifier: LGPL-3.0+
pragma solidity >=0.8.0;

library ccGroth16BN128{

    // BN128 에서는 G1이 2개의 uint256로 구성되어 있고, G2는 4개의 uint256로 구성되어 있다.
    // 참고자료 : https://github.com/clearmatics/zeth/blob/master/zeth_contracts/contracts/LibGroth16AltBN128.sol 

    // VerifyingKey : 
    //      uint256[2] alpha    : G_1
    //      uint256[4] beta     : G_2 (minus)
    //      uint256[4] delta    : G_2 (minus)
    //      uint256[2] gamma_abc: G_1
    //      uint256[4] gamma    : G_2 (minus)

    // Proof : 
    //      uint256[2] A    : G_1
    //      uint256[4] B    : G_2
    //      uint256[2] C    : G_1
    //      uint256[2] D    : G_1

    // Verification equation:
    //      A*B = alpha*beta + C*dela + D*gamma 
    //      A*B - alpha*beta - C*dela - D*gamma = 0
    // ccSNARK dose not have inputs, inputs are embeded at D

    function _verify(
        uint256[] storage vk,
        uint256[] memory proof
    )
        internal
        returns (bool)
    {
        require(proof.length == 10, "Invalid proof length");
        require(vk.length ==  16, "Invalid vk length");
       
        
        uint256 vk_slot_num;            // vk slot
        uint256[24] memory inputs;      // bn256Add, bn256Pairing inputs
        bool success = true;

        // inputs[0] = proof[8];
        // inputs[1] = proof[9];
        // inputs[2] = vk[10];
        // inputs[3] = vk[11];
        assembly 
        {   
            let proof_i := add(proof, 0x20)

            mstore(inputs, vk.slot)
            vk_slot_num := keccak256(inputs, 0x20)

            mstore(inputs, mload(add(proof_i, 0x100)))
            mstore(add(inputs, 0x20), mload(add(proof_i, 0x120)))
            mstore(add(inputs, 0x40), sload(add(vk_slot_num, 10)))
            mstore(add(inputs, 0x60), sload(add(vk_slot_num, 11)))

            // calculate proof.D + gamma_abc and store it in inputs[4] ~ inputs[7]
            success := call(gas(), 0x06, 0, inputs, 0x80, add(inputs, 0x240), 0x40)
        }
        require(success, "bn256Add fail");

        // input 0x0000 ~ 0x0040 : A
        // input 0x0040 ~ 0x00c0 : B
        // input 0x00c0 ~ 0x0100 : alpha_g1
        // input 0x0100 ~ 0x0180 : minus_beta_g2
        // input 0x0180 ~ 0x01c0 : C
        // input 0x01c0 ~ 0x0240 : minus_delta_g2
        // input 0x0240 ~ 0x0280 : D
        // input 0x0280 ~ 0x0300 : minus_gamma_g2
        assembly
        {
            let proof_i := add(proof, 0x20)

            // input 0x0000 ~ 0x0040 : A
            // input 0x0040 ~ 0x00c0 : B
            mstore(inputs, mload(proof_i))
            mstore(add(inputs, 0x20), mload(add(proof_i, 0x20)))
            mstore(add(inputs, 0x40), mload(add(proof_i, 0x40)))
            mstore(add(inputs, 0x60), mload(add(proof_i, 0x60)))
            mstore(add(inputs, 0x80), mload(add(proof_i, 0x80)))
            mstore(add(inputs, 0xa0), mload(add(proof_i, 0xa0)))
            
            // input 0x00c0 ~ 0x0100 : alpha_g1
            // input 0x0100 ~ 0x0180 : minus_beta_g2
            mstore(add(inputs, 0xc0), sload(vk_slot_num))
            mstore(add(inputs, 0xe0), sload(add(vk_slot_num, 1)))
            mstore(add(inputs, 0x100), sload(add(vk_slot_num, 2)))
            mstore(add(inputs, 0x120), sload(add(vk_slot_num, 3)))
            mstore(add(inputs, 0x140), sload(add(vk_slot_num, 4)))
            mstore(add(inputs, 0x160), sload(add(vk_slot_num, 5)))
            
            // input 0x0180 ~ 0x01c0 : C
            // input 0x01c0 ~ 0x0240 : minus_delta_g2
            mstore(add(inputs, 0x180), mload(add(proof_i, 0xc0)))
            mstore(add(inputs, 0x1a0), mload(add(proof_i, 0xe0)))
            mstore(add(inputs, 0x1c0), sload(add(vk_slot_num, 6)))
            mstore(add(inputs, 0x1e0), sload(add(vk_slot_num, 7)))
            mstore(add(inputs, 0x200), sload(add(vk_slot_num, 8)))
            mstore(add(inputs, 0x220), sload(add(vk_slot_num, 9)))

            // input 0x0280 ~ 0x0300 : minus_gamma_g2
            mstore(add(inputs, 0x280), sload(add(vk_slot_num, 12)))
            mstore(add(inputs, 0x2a0), sload(add(vk_slot_num, 13)))
            mstore(add(inputs, 0x2c0), sload(add(vk_slot_num, 14)))
            mstore(add(inputs, 0x2e0), sload(add(vk_slot_num, 15)))

            // verify inputs
            success := and(success, call(sub(gas(), 2000), 8, 0, inputs, 0x300, inputs, 0x20))
        }
        require(success, "bn256Pairing fail");
        return inputs[0] == 1;
    }
}