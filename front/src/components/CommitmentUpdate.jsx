import "../styles.css";
import React, { useState, useContext } from 'react';
import { updateValue, uploadValue } from "../core/http/http";
import { myContext } from "../App";
import { getAllCommitments } from "../core/web3/contractL2";

export default () => {

    const [loading, setLoading] = useState(false);
    const [valueUpload, setValueUpload] = useState('');
    const [valueUpdate, setValueUpdate] = useState('');
    const [indexUpdate, setIndexUpdate] = useState('');
    const { commitmentArray ,setCommitmentArray } = useContext(myContext);
    
    const uploadOnClick = async (e) => {
        setLoading(true)
        if(isNaN(valueUpload) || valueUpload === '') {
            console.log(isNaN(valueUpload), valueUpload);
            alert("value must be a number");
            return
        }
        if(await uploadValue(valueUpload)){
            await updateCommitmentArray();
            alert("Success");
        }
        else{
            alert("Error");
        }
        setLoading(false)
    }

    const updateOnClick = async (e) => {
        setLoading(true)
        if(isNaN(valueUpdate) || valueUpdate === '') {
            alert("value must be a number");
            return
        }
        if(isNaN(indexUpdate) || indexUpdate === '') {
            alert("index must be a number");
            return
        }

        if(await updateValue(indexUpdate, valueUpdate)){
            await updateCommitmentArray();
            alert("Success");
        }
        else{
            alert("Error");
        }
        setLoading(false)
    }

    const updateCommitmentArray = async () => {
        setCommitmentArray(await getAllCommitments());
    }

    return(
        <div className="commitmentUpdate">
            <div className="commitmentUpdate__card" style={{"marginBottom" : "10.5vh"}}>
                <div>
                    <div className="title"><h3>upload</h3> </div>
                    <input 
                        type="text" 
                        className="inputbox" 
                        style={{"marginBottom" : "15vh"}} 
                        placeholder="value"
                        onChange={(e) => {setValueUpload(e.target.value);}}
                    />
                </div>
                <button 
                    className="button" 
                    onClick={ loading ? ()=>{} :uploadOnClick}> upload
                </button>
            </div>

            <div className="commitmentUpdate__card">
                <div className="title"><h3>update</h3> </div>
                <input type="text" className="inputbox" placeholder="index" onChange={(e) => {setIndexUpdate(e.target.value);}}/>
                <input type="text" className="inputbox" placeholder="value" style={{"marginBottom" : "11vh"}} onChange={(e) => {setValueUpdate(e.target.value);}}/>
                <button className="button" onClick={loading ? ()=>{} :updateOnClick}>update</button>
            </div>
            
        </div>
    )
}