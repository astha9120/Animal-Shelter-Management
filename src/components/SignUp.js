import { Button, Form, FloatingLabel, Row, Col } from "react-bootstrap";
import React from "react";
import HomeImg from "../Images/home-img.jpeg";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { GoogleLogin } from "react-google-login";
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
  const [username, setUsername] = React.useState();

  const handleLogin = () => {
    console.log("Handle");

  };
  return (
    <div className="signup-Wrapper">
      <div className="signup">
        <h1>Sign Up</h1>
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

          <FloatingLabel
            controlId="floatingInput"
            label="Username"
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
                label="City"
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


          <Button
            className="signup-btn"
            variant="primary"
            type="submit"
            onClick={() => {
              handleLogin()
            }}
          >
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