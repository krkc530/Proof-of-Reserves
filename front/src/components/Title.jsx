/* global BigInt */
import "../styles.css";
import React, { useContext, useEffect, useState } from "react";
import { myContext } from "../App";

const Title = (params) => {
  let str = "ITSP & SNP BANK TOTAL VALUE: ";
  const str2 = "From server: ";
  let { contractAddressL2, contractAddressL1 } = useContext(myContext);
  const { totalValueFromContract, totalValueFromServer, sumOfCommitments } =
    params;

  const decTohex = (decStr, padSize = 64) => {
    return "0x" + BigInt(decStr).toString(16).padStart(padSize, "0");
  };

  return (
    <>
      <div className="title">
        <h1>
          {str}
          {totalValueFromContract}
          <br />
          {str2}
          {totalValueFromServer}
        </h1>
      </div>
      <div
        style={{
          paddingLeft: "5%",
          backgroundSize: "auto",
          backgroundColor: "#282c34",
          display: "flex",
          flex: "auto",
          color: "beige",
          fontFamily: "Franklin Gothic Medium",
          whiteSpace: "pre-wrap",
        }}
      >
        <h4 style={{}}>
          contract Address L1: {contractAddressL1} {"\n"}contract Address L2:{" "}
          {contractAddressL2}
        </h4>
        <br />
      </div>

      <div
        style={{
          paddingLeft: "5%",
          paddingRight: "5%",
          backgroundSize: "auto",
          backgroundColor: "#282c34",
          display: "flex",
          flex: "auto",
          color: "beige",
          fontFamily: "Franklin Gothic Medium",
        }}
      >
        {"### Sum of Commits:"}
        {`(${decTohex(sumOfCommitments[0])}, ${decTohex(sumOfCommitments[1])}`}
      </div>
    </>
  );
};

export default Title;
