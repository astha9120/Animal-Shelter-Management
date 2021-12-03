import { useState, useEffect } from "react"
import { Button, Form, FloatingLabel,Row,Col } from "react-bootstrap";
import {connect} from 'react-redux'

const Donation = ({userName}) =>{

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
    const [meeting, setMeeting] = useState()
    
    const handleSubmit = (e) =>{
      e.preventDefault()
      var tempDate = new Date(meeting)
      console.log(tempDate)
      setObj({...obj, meeting: tempDate})

    }
    return(
        <div className='adoption-form wrapper'>

        <Form onSubmit={(e) => {
              handleSubmit(e)
            }}>
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
              onChange={(e) => setMeeting(e.target.value)}
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
            />
          </FloatingLabel>

          
          <Button
            className="signup-btn"
            variant="primary"
            type="submit"
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
export default connect(mapStatesToProps,null)(Donation)