import { Button, Form, FloatingLabel } from "react-bootstrap";
import React from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom'; // version 5.2.0
import HomeImg from "../Images/home-img.jpeg";
import {connect} from 'react-redux'
import { Link } from "react-router-dom";
import {SET_STATE} from '../reducers/Actions/userActions'
import { GoogleLogin } from "react-google-login";
const SignIn = ({setUser}) => {
  const [emailId, setEmailId] = React.useState();
//   const [name, setName] = React.useState();
//   const [userName, setUserName] = React.useState();
  const [password, setPassword] = React.useState();
  let history = useHistory ();


// To send request to backend for Login
  // const handleLogin = async googleData => {
  //   const res = await fetch("/api/v1/auth/google", {
  //       method: "POST",
  //       body: JSON.stringify({
  //       token: googleData.tokenId
  //     }),
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })
  //   const data = await res.json()
  //   console.log(data)


  //   // store returned user here

    
  // }


    const handleLogin = (e) =>{
      e.preventDefault()
      console.log(emailId)
      console.log(password)
    }

  const handleSubmit_form = async(e)=>{
    e.preventDefault();
    const config = { headers: { 'Content-Type': 'application/json' } }
    console.log(emailId,password)
        const res =await axios.post(`http://localhost:4000/login/in/`,{email:emailId,password:password},config)
        .then((e)=>{
          if(e.data==="correct"){
            setUser({emailId, password})
            console.log("signin",emailId)
            history.push ("/main");

          }
          else{
            alert("Invalid Username/Password")
          }
        }).catch((err)=>{
          console.log(err)
        })
        
  }



  return (
    <div className="signup-Wrapper">
      <div className="signup">
        <h1>Sign In</h1>
        <Form onSubmit={e=>handleLogin(e)}>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              type="email"
              onChange={(e) => setEmailId(e.target.value)}
              required={true}
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required={true}
            />
          </FloatingLabel>

          <Button
            className="signup-btn"
            variant="primary"
            type="submit"
            onClick={handleSubmit_form} >
            Sign In
          </Button>
        </Form>

        {/* <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Sign in with Google"
          onSuccess={handleLogin}
          onFailure={handleLogin}
          cookiePolicy={"single_host_origin"}
        /> */}
        <div>
          <small>
            Don't have an account? <Link to="/signup">Sign Up</Link> here
          </small>
        </div>
      </div>

      <div className="home-img-wrapper">
        <img className="home-img" src={HomeImg} />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) =>{
  return {
    setUser: (responce) => dispatch({type: SET_STATE, payload: responce})
  }
}
export default connect(null, mapDispatchToProps)(SignIn);
