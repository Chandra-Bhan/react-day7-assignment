import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUP/SignUP";
import "./Assignment3.css"
function Assignment3(){


    function handleSubmit(e){
        e.preventDefault();
        alert("Welcome In my Assignment");

    }

    return(
        <>
        <div style={{marginTop:"300px"}}>
        <h1>Assignment 3</h1>
        <div style={{display:"flex",justifyContent:"space-around"}}>
            <SignUp subm={handleSubmit}/>
            <SignIn subm={handleSubmit}/>
            </div>
            </div>
        </>
    )
}
export default Assignment3;