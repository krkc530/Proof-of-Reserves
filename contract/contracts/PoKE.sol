// SPDX-License-Identifier: LGPL-3.0+
pragma solidity >=0.8.0;

import "./MiMC7.sol";
import "./PairingBn128.sol";
import "./proofOfReserves.sol";

/*
    we use ALT_BN128 curve
 */
contract PoKESigmaProtocol {

    // public parameter of Pedersen Commitment 
    // cm = g^v * h^r
    Pairing.G1Point public g;
    Pairing.G1Point public h;

    address proofOfReserversAddr; 

    constructor(
        uint256[2] memory _g,
        uint256[2] memory _h,
        address _proofOfReserversAddr
    ) {
        g.X = _g[0];
        g.Y = _g[1];
        h.X = _h[0];
        h.Y = _h[1];

        proofOfReserversAddr = _proofOfReserversAddr;
    }

    function get_sum_of_commitments() 
        private returns(Pairing.G1Point memory)
    {
        return ProofOfReservesContract(proofOfReserversAddr).get_sum_of_commitments();
    }

    // Proof :
    //    Proof[0] : t.x
    //    Proof[1] : t.y where t = h^r'
    //    Proof[2] : s   where s = r' + cr
    //    h^s == t * y^c
    //    h^(r'+ cr) == h^r' * h^(cr)
    function verify (
        uint256    value,
        uint256[3] memory _proof
    ) public payable returns (bool) {
        
        // y = cm/g^v = h^r
        Pairing.G1Point memory cm = get_sum_of_commitments();
        Pairing.G1Point memory y =  Pairing.add(cm, Pairing.negate(Pairing.mul(g, value)));

        Pairing.G1Point memory t = Pairing.G1Point(_proof[0], _proof[1]);
        uint256 s = _proof[2];

        bytes32 c_bytes = MiMC7._hash(
            MiMC7._hash(bytes32(h.X), bytes32(y.X)),  
            bytes32(t.X)
        );

        Pairing.G1Point memory hs = Pairing.mul(h, s);
        Pairing.G1Point memory yc = Pairing.mul(y, uint256(c_bytes));
        Pairing.G1Point memory tyc = Pairing.add(t, yc);

        require(hs.X == tyc.X && hs.Y == tyc.Y, "verify fail");
        return true;
    }
}