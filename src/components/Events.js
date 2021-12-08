import { connect } from "react-redux";
import { useEffect } from "react"
import { SET_EVENTS } from "../reducers/Actions/eventActions";
import Event from "./Event";
import axios from 'axios'

const Events = ({ events, setEvents }) => {

  const handlereq = async()=>{
    const config = { headers: { 'Content-Type': 'application/json' } }
    const res =await axios.get(`http://localhost:4000/event`,config)
    .then((e)=>{
      setEvents(e.data)
    }).catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
        handlereq();
        console.log("events",events)
  }, [])
  return (
    <div>
      {events.map((event) => {
          console.log(event)
        return <Event key={event.id} {...event} />;
      })}
    </div>
  );
};


const mapDispatchToProps = (dispatch) => {
    return {
      setEvents: (responce)=>dispatch({type: SET_EVENTS, payload: responce})
    };
  };
const mapStateToProps = (state) => {
  return {
    events: state.eventReducer,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Events);