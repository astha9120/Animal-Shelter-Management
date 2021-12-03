import { useState, useEffect } from "react"
import { Button, Form, FloatingLabel,Row,Col } from "react-bootstrap";
import {connect} from 'react-redux'
import axios from 'axios';

const Donation = ({emailId}) =>{

    var temp = {
        type: "",
        breed: "",
        color: "",
        weight: -1,
        age: 89,
        description: "",
        time: "",
        email: "123@gmail.com",
    }
    const [obj, setObj] = useState(temp)
    //const [meeting, setMeeting] = useState()
    
    const handleSubmit = async(e) =>{
      e.preventDefault()
      // var tempDate = new Date(meeting)
      // console.log(tempDate)
     // setObj({...obj, time: meeting})
      console.log(obj)
      const config = { headers: { 'Content-Type': 'application/json' } }
        const res =await axios.post(`http://localhost:4000/donation_pet`,obj,config)
        .then((e)=>{
          console.log(e)
        }).catch((err)=>{
          console.log(err)
        })
 

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
              onChange={(e) => setObj({...obj,time:e.target.value})}
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