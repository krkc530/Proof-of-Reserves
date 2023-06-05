import "./styles.css";
import React, { useEffect, createContext, useState, useReducer } from "react";
import CommitmentScrollView, { testCommitmentArray } from "./components/CommitmentScrollView";
import Title from "./components/Title";
import { useAsync } from 'react-async';
import CommitmentUpdate from "./components/CommitmentUpdate";
import { getAllCommitments, setContractInsL2 } from "./core/web3/contractL2";
import { getContractAddress } from "./core/http/http";

export const myContext = createContext({
  commitmentArray : [],
  setCommitmentArray : () =>{},
  contractAddressL2 : "",
  setContractAddressL2 : () =>{},
  contractAddressL1 : "",
  setContractAddressL1 : () =>{},
});

export default function App({Component}) {
  let [commitmentArray, setCommitmentArray] = useState([]);
  let [contractAddressL2, setContractAddressL2] = useState("");
  let [contractAddressL1, setContractAddressL1] = useState("");
  
  useEffect(() => {
    async function init(){
      await loadCommitmentAndContractAddress();
      setCommitmentArray(await getAllCommitments())
    }
    init();
  }, []);

  const loadCommitmentAndContractAddress = async () => {
    if (contractAddressL2 === "") {
      let addresses = (await getContractAddress());
      setContractInsL2(addresses['AddressL2'])
      setContractAddressL2(addresses['AddressL2']);
      setContractAddressL1(addresses['AddressL1']);
      // setContractIns(address)
      console.log(addresses)
    }
  }
  
  
  return (
    <myContext.Provider value={{
      commitmentArray,
      setCommitmentArray,
      contractAddressL2   : contractAddressL2,
      setContractAddressL2: setContractAddressL2,
      contractAddressL1   : contractAddressL1,
      setContractAddressL1: setContractAddressL1,
    }}>
      <Title />
      <div className="main">
        <CommitmentScrollView />
        <CommitmentUpdate />
      </div>
    </myContext.Provider>
  );
}
