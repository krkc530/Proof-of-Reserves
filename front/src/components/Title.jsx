import "../styles.css";
import React, { useContext, useEffect, useState } from 'react';
import { myContext } from "../App";
import { getTotalValue } from "../core/http/http"
import { getSumOfCommitmets } from "../core/web3/contract";

export default () => {
    let str = "PROOF OF RESERVES TOTAL VALUE : "
    let [totalValue, setTotalValue] = useState(0);
    let {contractAddress, commitmentArray} = useContext(myContext);
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
                "fontFamily":'Franklin Gothic Medium'
            }}>
                <h3>contract Address: {contractAddress}</h3>
                
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