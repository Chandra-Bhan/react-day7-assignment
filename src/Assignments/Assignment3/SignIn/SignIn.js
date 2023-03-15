function SignIn(props){
    return(
        <div className="signinDiv" style={{marginTop:"100px"}}>
          <h3>SignIn Form</h3>
          <form>
          <input type="text" placeholder="Email"/><br/>
            <input type="text" placeholder="Password"/><br/>
            <input className="btnSubmit" type="submit" onClick={props.subm} value="Submit"/><br/><br/><br/>
          </form>
        </div>
    )
}

export default SignIn;