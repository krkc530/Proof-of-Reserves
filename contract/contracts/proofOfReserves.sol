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

    function upload_commitment(
        uint256[] memory proof
    ) public payable returns (bool) {
        require(ccGroth16BN128._verify(verifyingKey, proof), "verify fail");

        Commitment memory cm = Commitment(proof[8], proof[9]);
        commitArray.push(cm);
        commitCnt++;

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
