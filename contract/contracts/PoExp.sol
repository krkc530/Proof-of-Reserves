// SPDX-License-Identifier: LGPL-3.0+

pragma solidity ^0.8.0;

// solhint-disable-next-line max-line-length

import "./MiMC7.sol";

library PoExp {
    // TODO: Verifier (All the variables are the element of G1)
    // c=H(h, y, t)
    // h^s == t*y^c
    // cm == y*g^v
    //
    // input: t, s
    // hash => c
    // public parameter: g, h, v, y=h^r, cm

    function _verify(
        uint256[] storage gen, // generator = [gX, gY, hX, hY]
        uint256[] memory proof, // proof = [tX, tY, s]
        uint256[] memory input // input = [v, yX, yY, cmX, cmY]
    ) internal returns (bool) {
        uint256[4] memory pad;
        uint256[2] memory left;
        uint256[2] memory right;
        uint256 gen_slot_num;
        bool result = true;

        bytes32[1] memory c = [
            MiMC7._hash(
                MiMC7._hash(
                    MiMC7._hash(bytes32(gen[2]), bytes32(gen[3])),
                    bytes32(input[1])
                ),
                bytes32(proof[0])
            )
        ];

        assembly {
            let g := sub(gas(), 2000)

            mstore(pad, gen.slot)
            gen_slot_num := keccak256(pad, 0x20)

            // 1. h^s == t * y^c
            mstore(pad, sload(add(gen_slot_num, 2))) // store h_X
            mstore(add(pad, 0x20), sload(add(gen_slot_num, 3))) // store h_Y
            mstore(add(pad, 0x40), mload(add(proof, 0x60))) // store s

            // Calculate left := h^s
            result := call(g, 7, 0, pad, 0x60, left, 0x40)

            mstore(pad, mload(add(input, 0x40))) // store y_X
            mstore(add(pad, 0x20), mload(add(input, 0x60))) // store y_Y
            mstore(add(pad, 0x40), mload(c)) // store c

            // Calculate y^c and store in pad
            result := and(result, call(g, 0x07, 0, pad, 0x60, pad, 0x40))

            // mstore(pad, mload(tmp))
            // mstore(add(pad, 0x20), mload(add(tmp, 0x20)))
            mstore(add(pad, 0x40), mload(add(proof, 0x20))) // store t_X
            mstore(add(pad, 0x60), mload(add(proof, 0x40))) // store t_Y

            // Calculate right := t * y^s
            result := and(result, call(g, 0x06, 0, pad, 0x80, right, 0x40))

            // Compare that each sides are equal.
            result := and(result, eq(left, right))

            // 2. cm == g^v * y
            mstore(left, mload(add(input, 0x80))) // left_X := cmX
            mstore(add(left, 0x20), mload(add(input, 0xa0))) // left_Y := cmY

            mstore(pad, sload(gen_slot_num)) // store g_X
            mstore(add(pad, 0x20), sload(add(gen_slot_num, 1))) // store g_Y
            mstore(add(pad, 0x40), mload(add(input, 0x20))) // store v

            // Calculate g^v and store in pad
            result := and(result, call(g, 7, 0, pad, 0x60, pad, 0x40))

            mstore(add(pad, 0x40), mload(add(input, 0x40)))
            mstore(add(pad, 0x60), mload(add(input, 0x60)))

            result := and(result, call(g, 0x06, 0, pad, 0x80, right, 0x40))

            result := and(result, eq(left, right))
        }
        require(
            result,
            "Reject: Error occured or something wrong(e.g. out of gas)"
        );

        return result;
    }
}
