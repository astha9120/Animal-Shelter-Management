import React, {Fragment, useState} from "react";
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@mui/styles";
import Button from '@material-ui/core/Button';
//import Swal from 'sweetalert2';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import {useHistory} from 'react-router-dom';
import { Typography } from "@material-ui/core";
import './postevent.css'


const useStyles = makeStyles((theme) => ({
    
}));

const Postevent = () =>{

     const [name,setName] = useState("");
     const [description,setDescription]=useState("");
     const [date,setDate]=useState("");
     const [location,setLocation]=useState("");
     const [photo,setPhoto]=useState(null);
     const classes = useStyles();


     const handleSubmit = async(e)=>{
        e.preventDefault();
        let formData = new FormData();    //formdata object
        formData.append('name', name);   //append the values with key, value pair  
        formData.append('date', date);
        formData.append('description', description);
        formData.append('location', location);
        formData.append('file',photo)
        console.log(formData)

        const config = { headers: { 'Content-Type': 'multipart/form-data' } };
        const res =await axios.post(`http://localhost:4000/event`, formData, config)
        console.log("res");
        res.status(200)
      }
  

    return (
        <Fragment>
            <h1 class="head_2">Event Form</h1>
            <form className={classes.form} >
            <div class="ip_2">
              <TextField type="input"
                  variant="outlined"
                  margin="normal"
                  style ={{width: '50%'}}
                  required
                  id="name"
                  label="Enter Name of the Event"
                  name="name"
                  autoFocus
                  onChange={e=>setName(e.target.value)}
                />
                </div>
                <div class="ip_2">
                    <TextField type="input"
                    variant="outlined"
                    margin="normal"
                    style ={{width: '50%'}}
                    required
                    id="description"
                    label="Enter the description of the event"
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
                    required
                    id="location"
                    label="Enter the location of the event"
                    name="location"
                    autoFocus
                    onChange={e=>setLocation(e.target.value)}
                    />
                </div>
                <div class="ip_2">
                    <TextField type="datetime-local"
                    variant="outlined"
                    margin="normal"
                    style ={{width: '50%'}}
                    required
                    id="date"
                    name="date"
                    autoFocus
                    onChange={e=>setDate(e.target.value)}
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

export default Postevent
