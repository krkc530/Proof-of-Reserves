import "../styles.css";
import React, { useContext, useEffect, useState } from 'react';
import { myContext } from "../App";
import { getContractIns } from "../core/web3/contract";

export default () => {
    let str = "PROOF OF RESERVES TOTAL VALUE : "
    let {contractAddress} = useContext(myContext);


    useEffect(() => {

    })

    return(
        <>
            <div className="title">
                <h1 >{str}</h1>
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
        </>
    )
}