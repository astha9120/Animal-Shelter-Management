import { Button, Form, FloatingLabel } from "react-bootstrap";
import React from "react";
import HomeImg from "../Images/home-img.jpeg";

import { Link } from "react-router-dom";

import { GoogleLogin } from "react-google-login";
const SignIn = () => {
  const [emailId, setEmailId] = React.useState();
//   const [name, setName] = React.useState();
//   const [userName, setUserName] = React.useState();
  const [password, setPassword] = React.useState();

// To send request to backend for Login
  const handleLogin = async googleData => {
    const res = await fetch("/api/v1/auth/google", {
        method: "POST",
        body: JSON.stringify({
        token: googleData.tokenId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json()
    console.log(data)


    // store returned user here

    
  }



  return (
    <div className="signup-Wrapper">
      <div className="signup">
        <h1>Sign In</h1>
        <Form>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
              onChange={(e) => setEmailId(e.target.value)}
              required="true"
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required="true"
            />
          </FloatingLabel>

          <Button
            className="signup-btn"
            variant="primary"
            type="submit"
            onClick={() => {
              //   Add Click Event Here
            }}
          >
            Sign In
          </Button>
        </Form>

        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Sign in with Google"
          onSuccess={handleLogin}
          onFailure={handleLogin}
          cookiePolicy={"single_host_origin"}
        />
        <div>
          <small>
            Don't have an account? <Link to="/signup">Sign up</Link> here
          </small>
        </div>
      </div>

      <div className="home-img-wrapper">
        <img className="home-img" src={HomeImg} />
      </div>
    </div>
  );
};

export default SignIn;
