// SPDX-License-Identifier: LGPL-3.0+
pragma solidity >=0.8.0;

import "./MiMC7.sol";
import "./PairingBn128.sol";
import "./proofOfReserves.sol";

/*
    we use ALT_BN128 curve
 */
contract ProofOfReservesContractL1 {

    // public parameter of Pedersen Commitment 
    // cm = g^v * h^r
    Pairing.G1Point public g;
    Pairing.G1Point public h;

    address proofOfReserversAddr; 

    uint256 totalValue;

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
        totalValue = 0;
    }

    function update_total_value(
        uint256 value,
        uint256[3] memory proof
    )  
        public 
        payable 
    {
        require(PoKE_sigma_protocol_verify(value, proof), "invalid proof");
        totalValue = value;
    }

    // Proof :
    //    Proof[0] : t.x
    //    Proof[1] : t.y where t = h^r'
    //    Proof[2] : s   where s = r' + cr
    //    h^s == t * y^c
    //    h^(r'+ cr) == h^r' * h^(cr)
    function PoKE_sigma_protocol_verify (
        uint256    value,
        uint256[3] memory _proof
    ) private returns (bool) {
        
        // y = cm/g^v = h^r
        Pairing.G1Point memory cm = get_sum_of_commitments();
        Pairing.G1Point memory y =  Pairing.add(cm, Pairing.negate(Pairing.mul(g, value)));

        Pairing.G1Point memory t = Pairing.G1Point(_proof[0], _proof[1]);
        uint256 s = _proof[2];

        // c = Hash( h.X || y.X || t.X )
        bytes32 c_bytes = MiMC7._hash(
            bytes32(MiMC7._hash(bytes32(h.X), bytes32(y.X))),  
            bytes32(t.X)
        );

        Pairing.G1Point memory hs = Pairing.mul(h, s);
        Pairing.G1Point memory yc = Pairing.mul(y, uint256(c_bytes));
        Pairing.G1Point memory tyc = Pairing.add(t, yc);

        return hs.X == tyc.X && hs.Y == tyc.Y;
    }

    function get_sum_of_commitments() 
        private view returns(Pairing.G1Point memory)
    {
        return ProofOfReservesContract(proofOfReserversAddr).get_sum_of_commitments();
    }

    function get_total_value()
        public view returns (uint256) 
    {
        return totalValue;
    }

    // ===== to Debug =====

    // y = h^r
    function calc_y(
        uint256 value
    )
        public
        payable
        returns (Pairing.G1Point memory)
    {
        Pairing.G1Point memory cm = get_sum_of_commitments();
        Pairing.G1Point memory y =  Pairing.add(cm, Pairing.negate(Pairing.mul(g, value)));
        return y;
    }

    // c = Hash( h.x || y.x || t.x )
    function clac_c(
        uint256 value,
        uint256[2] memory t
    )
        public
        payable 
        returns (uint256[2] memory)
    {
        uint256[2] memory ret;
        Pairing.G1Point memory y = calc_y(value);

        ret[0] = uint256(MiMC7._hash(bytes32(h.X), bytes32(y.X)));
        ret[1] = uint256(MiMC7._hash(
            bytes32(ret[0]),  
            bytes32(t[0])
        ));
        return ret;
    }

    function calc_hs(
        uint256 value,
        uint256[3] memory proof
    )
        public 
        payable 
        returns (Pairing.G1Point memory)
    {   

        Pairing.G1Point memory hs = Pairing.mul(h, proof[2]);
        return hs;
    }

    function calc_yc(
        uint256 value,
        uint256[3] memory proof
    )
        public 
        payable 
        returns (Pairing.G1Point memory, bytes32)
    {   
        Pairing.G1Point memory y = calc_y(value);
        Pairing.G1Point memory t = Pairing.G1Point(proof[0], proof[1]);

        bytes32 c_bytes = MiMC7._hash(
            bytes32(MiMC7._hash(bytes32(h.X), bytes32(y.X))),  
            bytes32(t.X)
        );

        Pairing.G1Point memory yc = Pairing.mul(y, uint256(c_bytes));
        return (yc, c_bytes);
    }

    function calc_tyc(
        uint256 value,
        uint256[3] memory proof
    )
        public 
        payable 
        returns (Pairing.G1Point memory, bytes32)
    {   
        Pairing.G1Point memory y = calc_y(value);
        Pairing.G1Point memory t = Pairing.G1Point(proof[0], proof[1]);

        bytes32 c_bytes = MiMC7._hash(
            bytes32(MiMC7._hash(bytes32(h.X), bytes32(y.X))),  
            bytes32(t.X)
        );

        Pairing.G1Point memory yc = Pairing.mul(y, uint256(c_bytes));
        Pairing.G1Point memory tyc= Pairing.add(t, yc);
        return (tyc, c_bytes);
    }
}

/*
g,h
[
    3180562012416913690925935386190007036479226111083987956960601792026358686114,
    17519154828104037515817392931973887796962669181002901086993947786934567488870
]
[ 
    4048032311302464926298094030158754074633619725258845665812735681205540954289,
    757310962534471265451611502350520868277877209646502467151549808202870646207
]

sigma PROOF
[
    239314435508027700476173748584025363358233456528297948113586176334700373411,
    4938961443782603145429073850479257948842394679856911215618086793243139919601,
    4194976159525599510130147974991281495984698748557958470180572732615368495519
]
*/