import { FILTER_PETS } from "./Actions/petListActions"
import { SET_PETS} from "./Actions/petListActions"



var tempHolder = []

const PetListReducer = (state=[], action) =>{
    
    if(action.type === FILTER_PETS)
    {

        if(action.payload === "")
        {
            return tempHolder
        }
        else
        {
            return tempHolder.filter((pet)=>pet.type === action.payload) 
        }
    }
    else if(action.type === SET_PETS)
    {
        tempHolder = action.payload
        console.log("tempHolder")
        console.log(tempHolder)
        return action.payload
    }
    return state

}

export default PetListReducer