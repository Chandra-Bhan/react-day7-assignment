import { useState } from "react";
import "./Assignment2.css";

function Assignment2(){

    const [data,setData]=useState("");
    const [count,setCount]=useState(0);

    function handleTextArea(e){
       
        if(e.target.value.length<=100)
        {
            setCount(e.target.value.length);
        setData(e.target.value)
        }
        else
        {
            alert("validated : You can type only 100 characters in textbox.");
        }
    }


return (
    <>
        <div style={{marginTop:"300px"}}>
            <h1>Assignment 2</h1>
            <h2>{count}</h2>
            <textarea width="100" cols="50" rows="11" value={data} onChange={handleTextArea} placeholder="You can type only 100 Characters"/>
        </div>
    </>
)
}
export default Assignment2;