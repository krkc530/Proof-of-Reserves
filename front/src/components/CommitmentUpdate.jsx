import "../styles.css";
import React, { useState } from 'react';

export default () => {

    const [valueUpload, setValueUpload] = useState('');
    const [valueUpdate, setValueUpdate] = useState('');
    const [indexUpdate, setIndexUpdate] = useState('');
    
    const uploadOnClick = () => {
        if(isNaN(valueUpload)) {
            console.log(isNaN(valueUpload), valueUpload);
            alert("value must be a number");
            return
        }
        
    }

    const updateOnClick = () => {
        if(isNaN(valueUpdate)) {
            alert("value must be a number");
            return
        }
        if(isNaN(indexUpdate)) {
            alert("index must be a number");
            return
        }
    }

    return(
        <div className="commitmentUpdate">
            <div className="commitmentUpdate__card" style={{"marginBottom" : "11.6vh"}}>
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
                    onClick={uploadOnClick}> upload
                </button>
            </div>

            <div className="commitmentUpdate__card">
                <div className="title"><h3>update</h3> </div>
                <input type="text" className="inputbox" placeholder="index" onChange={(e) => {setIndexUpdate(e.target.value);}}/>
                <input type="text" className="inputbox" placeholder="value" style={{"marginBottom" : "11vh"}} onChange={(e) => {setValueUpdate(e.target.value);}}/>
                <button className="button" onClick={updateOnClick}>update</button>
            </div>
            
        </div>
    )
}