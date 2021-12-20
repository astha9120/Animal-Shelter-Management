import { Button, Form, FloatingLabel, Row, Col } from "react-bootstrap";
import axios from 'axios';
import React from "react";
import HomeImg from "../Images/home-img.jpeg";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { GoogleLogin } from "react-google-login";
import { useHistory } from 'react-router-dom'; // version 5.2.0

// 997482154958-9ccbioqncmtp649r2qoq03a5e4g35so1.apps.googleusercontent.com <==> ClientID
// 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 <==> CLient secret
const SignUp = () => {
  const [emailId, setEmailId] = React.useState();
  const [name, setName] = React.useState();
  const [password, setPassword] = React.useState();
  const [phone, setPhone] = React.useState();
  const [country, setCountry] = React.useState();
  const [zip, setZip] = React.useState();
  const [state, setState] = React.useState();
  const [line1, setLine1] = React.useState();
  const [line2, setLine2] = React.useState();
  const [city, setCity] = React.useState();
  let history = useHistory ();



  const handleLogin = async(e) => {
    e.preventDefault();
    const config = { headers: { 'Content-Type': 'application/json' } }
    console.log(name,emailId,password,phone,line1,line2,city,state,country,zip)
        const res =await axios.post(`http://localhost:4000/login/up/`,{name:name,email:emailId,password:password,address:line1+line2+city+state+country+zip,contact:phone},config)
        .then((e)=>{
          console.log(e)
          alert("successful signed up")
          history.push ("/signin");

        }).catch((err)=>{
          console.log(err)
        })
      }
  return (
    <div className="signup-Wrapper">
      <div className="signup">
        <h1>Sign Up</h1>
        <Form onSubmit={e=>handleLogin(e)}>
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

          <FloatingLabel
            controlId="floatingInput"
            label="Full Name"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
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
          <br />
          {/* Information */}
          <FloatingLabel
            controlId="floatingInput"
            label="Address Line 1"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Address Line 1"
              onChange={(e) => setLine1(e.target.value)}
              required="true"
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Address Line 2"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Address Line 2"
              onChange={(e) => setLine2(e.target.value)}
              required="true"
            />
          </FloatingLabel>

          <Row className="mb-3">
            <Col>
              <FloatingLabel
                controlId="floatingInput"
                label="City"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="City"
                  onChange={(e) => setCity(e.target.value)}
                  required="true"
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Zip"
                className="mb-3"
                as={Col}
              >
                <Form.Control
                  type="text"
                  placeholder="City"
                  onChange={(e) => setZip(e.target.value)}
                  required="true"
                />
              </FloatingLabel>
            </Col>

            <Col>
              <FloatingLabel
                controlId="floatingInput"
                label="state"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="State/Province"
                  onChange={(e) => setState(e.target.value)}
                  required="true"
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Country"
                className="mb-3"
                as={Col}
              >
                <Form.Control
                  type="text"
                  placeholder="City"
                  onChange={(e) => setCountry(e.target.value)}
                  required="true"
                />
              </FloatingLabel>
            </Col>

          </Row>
          <FloatingLabel
                controlId="floatingInput"
                label="Phone number"
                className="mb-3"
                as={Col}
              >
                <Form.Control
                  type="number"
                  placeholder="City"
                  onChange={(e) => setPhone(e.target.value)}
                  required="true"
                />
              </FloatingLabel>

          <Button
            className="signup-btn"
            variant="primary"
            type="submit"
            onClick={handleLogin} >
            Sign Up
          </Button>
        </Form>
        {/* 
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Sign Up with Google"
            onSuccess={handleLogin}
            onFailure={handleLogin}
          cookiePolicy={"single_host_origin"}
        /> */}
        <div>
          <small>
            Already have an account? <Link to="/signin">Sign in</Link> here
          </small>
        </div>
      </div>

      <div className="home-img-wrapper">
        <img className="home-img" src={HomeImg} />
      </div>
    </div>

    
  );
};

export default SignUp;
