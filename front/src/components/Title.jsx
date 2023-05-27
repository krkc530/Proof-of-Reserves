import "../styles.css";
import React, { useContext, useEffect, useState } from 'react';
import { myContext } from "../App";
import { getTotalValue } from "../core/http/http"

export default () => {
    let str = "PROOF OF RESERVES TOTAL VALUE : "
    let [totalValue, setTotalValue] = useState(0);
    let {contractAddress, commitmentArray} = useContext(myContext);
    

    useEffect(() => {
        const GetTotalValue = async () =>{
            setTotalValue(await getTotalValue());
        }
        GetTotalValue();
    }, [commitmentArray])

    return(
        <>
            <div className="title">
                <h1 >{str} {totalValue}</h1>
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