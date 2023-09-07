/* global BigInt */
import "../styles.css";
import React, { useContext } from "react";
import { myContext } from "../App";

const CommitmentScrollView = () => {
  const { commitmentArray } = useContext(myContext);

  const decTohex = (decStr, padSize = 64) => {
    return "0x" + BigInt(decStr).toString(16).padStart(padSize, "0");
  };

  const CommitmentArrayComp = () => {
    if (commitmentArray === undefined) return <div></div>;
    return (
      <div className="commitment">
        {commitmentArray.map((val, ind) => (
          <div key={ind} className="commitment__element">
            {ind + " :  (" + decTohex(val[0]) + ", " + decTohex(val[1]) + ")"}{" "}
          </div>
        ))}
        <br />
      </div>
    );
  };

  return <CommitmentArrayComp />;
};

export default CommitmentScrollView;
