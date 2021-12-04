import { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'; // version 5.2.0
import { Button, Form, FloatingLabel,Row,Col } from "react-bootstrap";
import {connect} from 'react-redux'
import axios from 'axios';

// type, breed, color, weight, age,additional info, meeting time,username
const Adoption = ({emailId}) =>{

    var temp = {
        type: "",
        breed: "",
        color: "",
        weight: -1,
        age: 89,
        description: "",
        email:emailId,
        time:""
    }
  
    const [obj, setObj] = useState(temp)
    let history = useHistory ();

    //const [meeting, setMeeting] = useState("")

    const handleSubmit = async(e) =>{
      e.preventDefault()
      // var tempDate = new Date(meeting)
      // console.log(tempDate)
      //setObj({...obj, time: meeting})
      console.log(obj)
      const config = { headers: { 'Content-Type': 'application/json' } }
        const res =await axios.post(`http://localhost:4000/adoption`,obj,config)
        .then((e)=>{
          console.log(e)
          console.log(e)
          if(e.data==="correct"){
            alert("Form Submitted Successfully")
            history.push ("/main");

          }
          else{
            alert("Please sbmit it again")
          }
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
                description: e.target.value})}
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
    emailId: state.userReducer.emailId
  }
}
export default connect(mapStatesToProps,null)(Adoption)