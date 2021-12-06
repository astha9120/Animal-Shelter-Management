import { SET_STATE } from "./Actions/userActions";

const initialState = {
  name: "",
  emailId: "",
  password: "",
  username: "",
  phone:0 ,
  address:{
    line1: "",
    line2: "",
    city: "",
    state: "",
    country: "",
    zip: 0,
  }
};

const userReducer = (state = initialState, action) => {
  if (action.type === SET_STATE) {
    console.log(action.payload)
    return action.payload;
  } else {
    return state;
  }
};

export default userReducer;