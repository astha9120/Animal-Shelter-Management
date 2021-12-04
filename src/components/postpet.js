import React, {Fragment, useState} from "react";
import axios from 'axios';
import TextField from '@material-ui/core/TextField'
import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
//import Swal from 'sweetalert2';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import {useHistory} from 'react-router-dom';
import { Typography } from "@material-ui/core";
//import './postevent.css'

const useStyles = makeStyles(Theme => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }));

const Postpet = () =>{

     const [type,setType] = useState("");
     const [description,setDescription]=useState("");
     const [breed,setBreed]=useState("");
     const [age,setAge]=useState(0);
     const [location,setLocation]=useState("");
     const [color,setColor]=useState("");
     const [weight,setWeight] = useState(0);
     const [status,setStatus]=useState("");
     const [photo,setPhoto]=useState(null);
     const classes = useStyles();


     const handleSubmit = async(e)=>{
        e.preventDefault();
        let formData = new FormData();    //formdata object
        formData.append('type',type)
        formData.append('breed',breed)
        formData.append('age',age)
        formData.append('color',color)
        formData.append('weight',weight)
        formData.append('status',status)
        formData.append('description', description);
        formData.append('location', location);
        formData.append('file',photo)
        console.log(formData)

        const config = { headers: { 'Content-Type': 'multipart/form-data' } };
        const res =await axios.post(`http://localhost:4000/pet`, formData, config)
        console.log("res");
        res.status(200)
      }
  

    return (
        <Fragment>
            <h1>Pet Form</h1>
            <form className={classes.form} >
                <div class="ip_2">
                  <TextField type="input"
                  variant="outlined"
                  margin="normal"
                  style ={{width: '50%'}}
                  required
                  id="type"
                  label="Enter type of Pet"
                  name="type"
                  autoFocus
                  onChange={e=>setType(e.target.value)}
                />
                </div>
                <div class="ip_2">
                  <TextField type="input"
                  variant="outlined"
                  margin="normal"
                  style ={{width: '50%'}}
                  id="breed"
                  label="Enter breed of pet"
                  name="breed"
                  autoFocus
                  onChange={e=>setBreed(e.target.value)}
                />
                </div>
                <div class="ip_2">
                    <TextField type="input"
                    variant="outlined"
                    margin="normal"
                    style ={{width: '50%'}}
                    id="description"
                    label="Enter the description of the pet"
                    name="description"
                    autoFocus
                    onChange={e=>setDescription(e.target.value)}
                    />
                </div>
                <div class="ip_2">
                    <TextField type="input"
                    variant="outlined"
                    margin="normal"
                    style ={{width: '50%'}}
                    id="color"
                    label="Enter color of pet"
                    name="color"
                    autoFocus
                    onChange={e=>setColor(e.target.value)}
                    />
                
                </div>
                <div class="ip_2">
                    <TextField type="input"
                    variant="outlined"
                    margin="normal"
                    style ={{width: '50%'}}
                    required
                    id="location"
                    label="Enter the location of the pet"
                    name="location"
                    autoFocus
                    onChange={e=>setLocation(e.target.value)}
                    />
                </div>
                <div class="ip_2">
                    <TextField type="number"
                    variant="outlined"
                    margin="normal"
                    style ={{width: '50%'}}
                    id="age"
                    label="Enter age of pet"
                    name="age"
                    autoFocus
                    onChange={e=>setAge(e.target.value)}
                    />
                </div>
                <div class="ip_2">
                    <TextField type="number"
                    variant="outlined"
                    margin="normal"
                    style ={{width: '50%'}}
                    id="weight"
                    name="weight"
                    label = "Enter weight of pet"
                    autoFocus
                    onChange={e=>setWeight(e.target.value)}
                    />
                </div>
                <div class="ip_2">
                    <TextField type="input"
                    variant="outlined"
                    margin="normal"
                    style ={{width: '50%'}}
                    id="status"
                    name="status"
                    label = "Enter medical status if any"
                    autoFocus
                    onChange={e=>setStatus(e.target.value)}
                    />
                </div>
                <div>
                    <Typography>Upload the image here:</Typography>
                    <TextField type="file"
                    variant="outlined"
                    margin="normal"
                    id="paper"
                    style ={{width: '50%'}}
                    name="paper"
                    autoFocus
                    onChange= {e=>setPhoto(e.target.files[0])}
                    /> 
                </div>
                <div>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style ={{width: '25%'}}
                  className={classes.submit}
                  onClick={handleSubmit} >
                  Submit
                  </Button>
                </div>
            </form>
        </Fragment>
    );
}

export default Postpet
