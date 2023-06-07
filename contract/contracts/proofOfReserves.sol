// SPDX-License-Identifier: LGPL-3.0+
pragma solidity >=0.8.0;

import "./ccGroth16VerifyBn128.sol";
import "./PairingBn128.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract ProofOfReservesContractL2 is Ownable {
    // G1 Point (x, y)
    struct Commitment {
        uint256 px;
        uint256 py;
    }


    // ccGroth16 검증키
    uint256[] private verifyingKey;

    // 전체 사용자 commitment
    Pairing.G1Point[MAX_ACCOUNT_NUM] commitArray;

    // 전체 사용자 commitment의 합
    Pairing.G1Point sumOfCommitment = Pairing.G1Point(0, 0);

    // 전체 사용자 수
    uint256 private commitCnt = 0;

    // sumOfCommitment의 x좌표 확인
    mapping(uint256 => bool) _sumOfCommitmentList;


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
    ) public onlyOwner returns (uint256) {
        require(ccGroth16BN128._verify(verifyingKey, proof), "verify fail");

        Pairing.G1Point memory cm = Pairing.G1Point(proof[8], proof[9]);
        commitArray[commitCnt] = cm;

        if(cm.X == 0 && cm.Y == 0) { sumOfCommitment = cm; } 
        else { sumOfCommitment = Pairing.add(sumOfCommitment, cm); }

        _sumOfCommitmentList[sumOfCommitment.X] = true;

        return commitCnt++;
    }

    function update_commitment(
        uint256 idx,
        uint256[] memory proof
    ) public onlyOwner returns (bool) {
        require(idx < commitCnt, "Invalid index");
        require(ccGroth16BN128._verify(verifyingKey, proof), "verify fail");

        Pairing.G1Point memory tmp;
    
        tmp = Pairing.add(
            sumOfCommitment,
            Pairing.negate(commitArray[idx])
        );

        commitArray[idx].X = proof[8];
        commitArray[idx].Y = proof[9];

        sumOfCommitment = Pairing.add(
            tmp,
            commitArray[idx]
        );
        
        _sumOfCommitmentList[sumOfCommitment.X] = true;

        return true;
    }

    function get_vk() public view returns (uint256[] memory) {
        return verifyingKey;
    }

    function get_all_commitments() public view returns (Pairing.G1Point[] memory) {
        return commitArray;
    }

    function get_commitment_cnt() public view returns (uint256) {
        return commitCnt;
    }

    function get_sum_of_commitments() public view returns (Pairing.G1Point memory) {
        return sumOfCommitment;
    }

    function is_appeared_sum_of_commitments(uint256 _x) public view returns (bool) {
        return _sumOfCommitmentList[_x];
    }
}
