import "../styles.css";
import React, { useContext, useEffect, useState } from 'react';
import { myContext } from "../App";
import { getSumOfCommitmets } from "../core/web3/contractL2";
import { getTotalValue } from "../core/web3/contractL1";

export default () => {
    let str = "ITSP & SNP BANK TOTAL VALUE : "
    let [totalValue, setTotalValue] = useState(0);
    let {contractAddressL2,contractAddressL1, commitmentArray} = useContext(myContext);
    let [sumOfCommitments, setSumOfCommitments] = useState("");

    useEffect(() => {
        const GetTotalValue = async () =>{
            setTotalValue(await getTotalValue());
            setSumOfCommitments(await getSumOfCommitmets())
        }
        GetTotalValue();
    }, [commitmentArray])

    return(
        <>
            <div className="title">
                <h1 >{str} {totalValue} </h1>
            </div>
            <div style={{
                "paddingLeft":"5%",
                "backgroundSize": "auto",
                "backgroundColor": "#282c34",
                "display": "flex",
                "flex": "auto",
                "color":"beige",
                "fontFamily":'Franklin Gothic Medium',
                "whiteSpace" : "pre-wrap"
            }}>
                <h4 style={{}}>contract Address L1: {contractAddressL1} {'\n'}contract Address L2: {contractAddressL2}</h4><br/>
            </div>
            
            {/* <div style={{
                "paddingLeft":"5%",
                "paddingRight":"5%",
                "backgroundSize": "auto",
                "backgroundColor": "#282c34",
                "display": "flex",
                "flex": "auto",
                "color":"beige",
                "fontFamily":'Franklin Gothic Medium'
            }}>
                {sumOfCommitments}
            </div> */}
        </>
    )
}