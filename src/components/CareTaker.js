import { useState, useEffect } from "react";
import { Button, Form, FloatingLabel, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
// email,type, breed, color, weight, age,description starttime,, endtime
const CareTaker = ({ emailId }) => {
  var temp = {
    type: "",
    breed: "",
    color: "",
    weight: -1,
    age: 89,
    info: "",
    starttime: "",
    endtime: "",
    emailId,
  };
  const [obj, setObj] = useState(temp);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    var tempStartDate = new Date(startDate);
    var tempEndDate = new Date(endDate);
    // console.log(tempDate);
    setObj({ ...obj, starttime: tempStartDate, endtime: tempEndDate });
  };
  return (
    <div className="adoption-form wrapper">
      <Form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Row>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="Type"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Full Name"
                onChange={(e) => setObj({ ...obj, type: e.target.value })}
                required="true"
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Breed"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Full Name"
                onChange={(e) => setObj({ ...obj, breed: e.target.value })}
                required="true"
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="color"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Full Name"
                onChange={(e) => setObj({ ...obj, color: e.target.value })}
                required="true"
              />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="Weight"
              className="mb-3"
            >
              <Form.Control
                type="number"
                placeholder="Full Name"
                onChange={(e) => setObj({ ...obj, weight: e.target.value })}
                required="true"
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Age"
              className="mb-3"
            >
              <Form.Control
                type="number"
                placeholder="Age"
                onChange={(e) => setObj({ ...obj, age: e.target.value })}
                required="true"
              />
            </FloatingLabel>
          </Col>
        </Row>

        <Row>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="Start Date"
              className="mb-3"
            >
              <Form.Control
                type="date"
                placeholder=""
                onChange={(e) => setStartDate(e.target.value)}
                required="true"
              />
            </FloatingLabel>
          </Col>

          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="End Date"
              className="mb-3"
            >
              <Form.Control
                type="date"
                placeholder=""
                onChange={(e) => setEndDate(e.target.value)}
                required="true"
              />
            </FloatingLabel>
          </Col>
        </Row>
        <FloatingLabel
          controlId="floatingInput"
          label="Additional Information"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder=""
            onChange={(e) => setObj({ ...obj, type: e.target.value })}
          />
        </FloatingLabel>

        <Button className="signup-btn" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
const mapStatesToProps = (state) => {
  return {
    emailId: state.userReducer.emailId,
  };
};
export default connect(mapStatesToProps, null)(CareTaker);
