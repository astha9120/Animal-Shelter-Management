import Search from "./Search";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import {connect} from 'react-redux'
import {SET_STATE} from "../reducers/Actions/userActions"

const Searchbar = ({setUser, obj}) => {
  const signOutHandle = () => {
    setUser({...obj, emailId : ""})
  };

  return (
    <div className="searchbar-wrapper">
      <div>
        <img
          src="https://www.pinclipart.com/picdir/big/63-631058_feet-clipart-blue-foot-logo-blue-animal-footprint.png"
          className="logo-bar"
        />
      </div>
      <Search />
      <span className="link-margin-left">
        <Link to='/adoptionform' className="link-signout link-colored"> Adoption </Link>
        <Link to='/donationform' className="link-signout link-colored"> Donation </Link>
        <Link to='/caretakerform' className="link-signout link-colored"> Care Taker </Link>
        <Link to='/events' className="link-signout link-colored"> Events</Link>
      </span>
      <div className="btn-signout-wrapper">
        <Button
          variant="primary"
          className="btn-signout"
          onClick={() => {signOutHandle()}}
        >
          
          <Link className="link-signout" to="/">
            Sign Out
          </Link>
        </Button>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) =>{
  return {
    setUser: (responce)=>dispatch({type: SET_STATE, payload: responce})
  }
}
const mapStateToProps = (state) =>{
  return {
      obj : state.userReducer
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Searchbar);
