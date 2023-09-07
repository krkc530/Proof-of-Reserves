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
    mapping(uint256 => Pairing.G1Point[]) commitArray;

    // 전체 사용자 commitment의 합, initialized as zero
    mapping(uint256 => Pairing.G1Point) sumOfCommitment;

    // 전체 사용자 수, initialized as zero
    mapping(uint256 => uint256) private commitCnt;

    // sumOfCommitment의 x좌표 확인
    mapping(uint256 => mapping(uint256 => bool)) _sumOfCommitmentList;

    constructor(uint256[] memory _vk) {
        verifyingKey = _vk;
    }

    // Proof :
    //      uint256[2] A    : G_1
    //      uint256[4] B    : G_2
    //      uint256[2] C    : G_1
    //      uint256[2] D    : G_1
    function upload_commitment(
        uint256 assetIdx,
        uint256[] memory proof
    ) public onlyOwner returns (uint256) {
        require(ccGroth16BN128._verify(verifyingKey, proof), "verify fail");

        Pairing.G1Point memory cm = Pairing.G1Point(proof[8], proof[9]);
        commitArray[assetIdx].push(cm);

        if (cm.X == 0 && cm.Y == 0) {
            sumOfCommitment[assetIdx] = cm;
        } else {
            sumOfCommitment[assetIdx] = Pairing.add(
                sumOfCommitment[assetIdx],
                cm
            );
        }

        _sumOfCommitmentList[assetIdx][sumOfCommitment[assetIdx].X] = true;

        return commitCnt[assetIdx]++;
    }

    function update_commitment(
        uint256 assetIdx,
        uint256 idx,
        uint256[] memory proof
    ) public onlyOwner returns (bool) {
        require(idx < commitCnt[assetIdx], "Invalid index");
        require(ccGroth16BN128._verify(verifyingKey, proof), "verify fail");

        Pairing.G1Point memory tmp;

        tmp = Pairing.add(
            sumOfCommitment[assetIdx],
            Pairing.negate(commitArray[assetIdx][idx])
        );

        commitArray[assetIdx][idx].X = proof[8];
        commitArray[assetIdx][idx].Y = proof[9];

        sumOfCommitment[assetIdx] = Pairing.add(
            tmp,
            commitArray[assetIdx][idx]
        );

        _sumOfCommitmentList[assetIdx][sumOfCommitment[assetIdx].X] = true;

        return true;
    }

    function get_vk() public view returns (uint256[] memory) {
        return verifyingKey;
    }

    function get_all_commitments(
        uint256 assetIdx
    ) public view returns (Pairing.G1Point[] memory) {
        return commitArray[assetIdx];
    }

    function get_commitment_cnt(
        uint256 assetIdx
    ) public view returns (uint256) {
        return commitCnt[assetIdx];
    }

    function get_sum_of_commitments(
        uint256 assetIdx
    ) public view returns (Pairing.G1Point memory) {
        return sumOfCommitment[assetIdx];
    }

    function is_appeared_sum_of_commitments(
        uint256 assetIdx,
        uint256 _x
    ) public view returns (bool) {
        return _sumOfCommitmentList[assetIdx][_x];
    }
}
