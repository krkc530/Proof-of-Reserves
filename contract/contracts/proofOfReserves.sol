// SPDX-License-Identifier: LGPL-3.0+
pragma solidity >=0.8.0;

import "./ccGroth16VerifyBn128.sol";

contract ProofOfReservesContract {
    // G1 Point (x, y)
    struct Commitment {
        uint256 px;
        uint256 py;
    }

    uint256[] private verifyingKey;

    Commitment[] commitArray;

    uint256 private commitCnt = 0;

    constructor(uint256[] memory _vk) {
        verifyingKey = _vk;
    }

    // Proof :
    //      uint256[2] A    : G_1
    //      uint256[4] B    : G_2
    //      uint256[2] C    : G_1
    //      uint256[2] D    : G_1
    function upload_commitment(
        uint256[] memory proof
    ) public payable returns (uint256) {
        require(ccGroth16BN128._verify(verifyingKey, proof), "verify fail");

        Commitment memory cm = Commitment(proof[8], proof[9]);
        commitArray.push(cm);
        return commitCnt++;
    }

    function update_commitment(
        uint256 idx,
        uint256[] memory proof
    ) public payable returns (bool) {
        require(idx < commitCnt, "Invalid index");
        require(ccGroth16BN128._verify(verifyingKey, proof), "verify fail");

        commitArray[idx].px = proof[8];
        commitArray[idx].py = proof[9];
        return true;
    }

    function get_vk() public view returns (uint256[] memory) {
        return verifyingKey;
    }

    function get_all_commitments() public view returns (Commitment[] memory) {
        return commitArray;
    }

    function get_commitment_cnt() public view returns (uint256) {
        return commitCnt;
    }
}
