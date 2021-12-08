import { SET_EVENTS} from "./Actions/eventActions"
// name, description, date, location, photos(optional)
var initialState = []


const eventReducer = (state = initialState, action) =>{

    if(action.type === SET_EVENTS)
    {
        initialState = action.payload
        return action.payload
    }
    return state

}

export default eventReducer