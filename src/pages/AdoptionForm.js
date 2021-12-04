import Form from "../components/Adoption";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import {SET_STATE} from "../reducers/Actions/userActions"
const AdoptionForm = ({obj, setUser}) => {
  const signOutHandle = () => {
    setUser({...obj, emailId: ""})
  };

  return (
    <div className="adoption-form-wrapper">
      <div className="adoption-bar-wrapper">
        <img
          src="https://www.pinclipart.com/picdir/big/63-631058_feet-clipart-blue-foot-logo-blue-animal-footprint.png"
          className="logo-bar"
        />

        <span className="bar-form-text">Adoption Form</span>
        <span className="link-margin-left"><Link to='/main' className="link-signout link-colored"> Main</Link></span>
          <div className="btn-signout-wrapper">
            <Button
              variant="primary"
              className="btn-signout"
              onClick={() => signOutHandle()}
            >
              <Link className="link-signout" to='/'>Sign Out</Link>
            </Button>
        </div>
      </div>

      <Form />
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
export default connect(mapStateToProps,mapDispatchToProps)(AdoptionForm);
