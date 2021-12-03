import { SET_STATE } from "./Actions/userActions";

const initialState = {
  name: "Jainit",
  emailId: "",
  password: "asdfgh",
  username: "kjkjakm",
  phone: 865464654,
  address:{
    line1: "jishf",
    line2: "kuabd",
    city: "ahmedabad",
    state: "gujarat",
    country: "india",
    zip: 1355,
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