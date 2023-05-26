import "./styles.css";
import React, { useEffect, createContext, useState } from "react";
import CommitmentScrollView, { testCommitmentArray } from "./components/CommitmentScrollView";
import Title from "./components/Title";
import { useAsync } from 'react-async';
import CommitmentUpdate from "./components/CommitmentUpdate";
import { getAllCommitments, setContractIns } from "./core/web3/contract";
import { getContractAddress } from "./core/http/http";

const loadCommitmentAndContractAddress = async () => {
  const address = await getContractAddress();
  setContractIns(address);

  const commitments = await getAllCommitments();

  return {commitments, address};
}

export const myContext = createContext({
  commitmentArray : [],
  setCommitmentArray : ()=>{},
  contractAddress : "",
});

export default function App({Component}) {

  let [commitmentArray, setCommitmentArray] = useState([]);

  const {data, error, isLoading} = useAsync({promiseFn: loadCommitmentAndContractAddress});

  if(data){
    console.log(data);
    return <div>data</div>
  }

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
