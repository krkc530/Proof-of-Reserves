import "./styles.css";
import React, { useEffect, createContext, useState } from "react";
import CommitmentScrollView, { testCommitmentArray } from "./components/CommitmentScrollView";
import Title from "./components/Title";
import { useAsync } from 'react-async';
import CommitmentUpdate from "./components/CommitmentUpdate";
import { getAllCommitments, setContractIns } from "./core/web3/contract";
import { getContractAddress } from "./core/http/http";



export const myContext = createContext({
  commitmentArray : [],
  setCommitmentArray : ()=>{},
  contractAddress : "",
});

export default function App({Component}) {
    
  useEffect( ()=>{
    const loadCommitmentAndContractAddress = async () => {
      const address = await getContractAddress();
      // setContractIns('0x28e16C629991bE7aD561E5acaD0c3be3B7E01b96');
      console.log(address);
      const commitments = await getAllCommitments();
    
      return commitments;
    }
    loadCommitmentAndContractAddress();
  })

  let [commitmentArray, setCommitmentArray] = useState([]);
  
  return (
    <myContext.Provider value={{
      commitmentArray   : commitmentArray,
      setCommitmentArray: setCommitmentArray,
    }}>
      <Title />
      <div className="main">
        <CommitmentScrollView />
        <CommitmentUpdate />
      </div>
    </myContext.Provider>
  );
}
