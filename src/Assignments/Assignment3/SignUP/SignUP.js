function SignUp(props){
    return(
        <div className="signupDiv" style={{marginTop:"100px"}}>
        <h3>SignUp Form</h3>
         <form>
            <input type="text" placeholder="FirstName"/><br/>
            <input type="text" placeholder="LastName"/><br/>
            <input type="text" placeholder="Email"/><br/>
            <input type="text" placeholder="Password"/><br/>
            <input className="btnSubmit"  type="submit"  onClick={props.subm} value="Submit"/><br/><br/><br/>
         </form>
        </div>
    )
}
export default SignUp;