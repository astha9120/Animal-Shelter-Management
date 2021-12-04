import { connect } from "react-redux";
import { useState, useEffect } from "react"
import {SET_PETS} from '../reducers/Actions/petListActions'
import Pet from "./Pet";
import axios from 'axios';




const Pets = ({ pets, setPetList }) => {

    const handlereq = async()=>{
      const config = { headers: { 'Content-Type': 'application/json' } }
      const res =await axios.get(`http://localhost:4000/pet`,config)
      .then((e)=>{
        setPetList(e.data)
      }).catch((err)=>{
        console.log(err)
      })
    }

    useEffect(()=>{
          handlereq();
          console.log("pets",pets)
    }, [])
    
  return (
    <div>
      {pets.map((pet) => {
        return <Pet key={pet.id} {...pet} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pets: state.petListReducer,
  };
};

const mapDispatchToProps = (dispatch) =>{
  return {
    setPetList: (response) => dispatch({type: SET_PETS, payload: response})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Pets);
