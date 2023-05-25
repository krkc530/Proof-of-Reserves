import "../styles.css";
import React, { useState } from 'react';

export default () => {
    let str = "PROOF OF RESERVES TOTAL VALUE : "

    
    return(
        <>
            <div className="title">
                <h1 >{str}</h1>
            </div>
            <div style={{
                "padding-left":"5%",
                "background-size": "auto",
                "background-color": "#282c34",
                "display": "flex",
                "flex": "auto",
                "color":"beige",
                "font-family":'Franklin Gothic Medium'
            }}>
                <h3>contract Address: </h3>
            </div>
        </>
    )
}