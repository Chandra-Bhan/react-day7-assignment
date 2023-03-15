import {useState} from "react";
import "./Assignment1.css";

function Assignment1(){
    let img1="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg";
    let img2="https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/social/reactt-light_1200x628.png?sfvrsn=43eb5f2a_2";
    let img3="https://uploads.sitepoint.com/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png";
    let img4="https://pbs.twimg.com/media/Fa20yS5WAAAi0QS.jpg";
    let imgArray=[img1,img2,img3,img4];
    let [count,setCount]=useState(0);
    const [pic,setPic]=useState(imgArray[count]);
    
    
    function handleChangeFun(){
        console.log(imgArray.length)
        if(count==imgArray.length-1){
            setCount(count=-1);
        }
        setCount(++count);
        setPic(imgArray[count]);       
    }
    return (

        <>
        <h1>Assignment 1</h1>
        <div className="mainDiv">
            <div className="imgDiv">
              <img src={pic} width="900" height="500"/>
            </div>
            <div className="btnDiv">
                <button className="btn" onClick={handleChangeFun}>Change Pic</button>
            </div>
            </div>
        </>
        
    )
}

export default Assignment1;