import { useState, useEffect } from "react"
import { Button, Form, FloatingLabel,Row,Col } from "react-bootstrap";
import {connect} from 'react-redux'
// type, breed, color, weight, age,additional info, meeting time,username
const Adoption = ({userName}) =>{

    var temp = {
        type: "",
        breed: "",
        color: "",
        weight: -1,
        age: 89,
        info: "",
        meeting: "",
        username: userName,
    }
    const [obj, setObj] = useState(temp)

    const handleSubmit = () =>{

    }
    
    return(
        <div className='adoption-form wrapper'>

        <Form>
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
              onChange={(e) => setObj({...obj,
                                type: e.target.value})}
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
              onChange={(e) => setObj({...obj,
                                breed: e.target.value})}
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
              onChange={(e) => setObj({...obj,
                                color: e.target.value})}
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
              onChange={(e) => setObj({...obj,
                                weight: e.target.value})}
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
              onChange={(e) => setObj({...obj,
                                age: e.target.value})}
              required="true"
            />
          </FloatingLabel>


          <FloatingLabel
            controlId="floatingInput"
            label="Meeting Time"
            className="mb-3"
          >
            <Form.Control
              type="date"
              placeholder=""
              onChange={(e) => setObj({...obj,
                                meeting: e.target.value})}
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
              onChange={(e) => setObj({...obj,
                                type: e.target.value})}
              required="true"
            />
          </FloatingLabel>

          
          <Button
            className="signup-btn"
            variant="primary"
            type="submit"
            onClick={() => {
              handleSubmit()
            }}
          >
            Submit
          </Button>
          </Form>
        </div>
    )
}
const mapStatesToProps = (state) =>{
  return {
    userName: state.userReducer.username
  }
}
export default connect(mapStatesToProps,null)(Adoption)