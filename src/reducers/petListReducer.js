import { FILTER_PETS } from "./Actions/petListActions"
import { SET_PETS} from "./Actions/petListActions"

var initialState = [
    {
        id: 1,
        name: "p1",
        age: 10,
        weight: 90.78,
        breed: "ew",
        color: "lads",
        discription: "kvdk kank jnakjnkj nekjankj ncjsaAnkvdk kank jnakjnkj nekja nkjncjsaA nkvdk kank jnakjnkj nekjankjncjsaAnkvdk kank jnakjnkj nekjankj ncjsaAnkvdk kank jnakjnkj nek jankjncjsa Ankvdk kank jnakjnkj nekjankjncjsaAnkvdk kank jnakjnkj nekjankjn cjsaAnkvdk kank jnakjnkj nekj ankjnc jsaAnkvdk kank jnakjnkj nekjankjncjsaAnkvdk kank jnakjnkj nekjankjnc jsaAnkvdk kank jnakjnkj nekjan kjncj saAnkvdk kank jnakjnkj nekjankjncjsaAnkvdk kank jnakjnkj nekjankjncj saAnkvdk kank jnakjnkj nekjan kjncjsaAnkvdk kank jnakjnkj nekjankjncjsaAnkvdk kank jnakjnkj nekjankjncjs aAnkvdk kank jnakjnkj nekjank jncjsaAnkvdk kank jnakjnkj nekjankjncjsaA",
        photo: "https://www.iata.org/contentassets/d7c512eb9a704ba2a8056e3186a31921/cargo_live_animals_parrot.jpg",
        type: "cat"
    },
    {
        id: 2,
        name: "p2",
        age: 10,
        weight: 90.78,
        breed: "las",
        color: "aves",
        discription: "klCN",
        photo: "https://www.iata.org/contentassets/d7c512eb9a704ba2a8056e3186a31921/cargo_live_animals_parrot.jpg",
        type: "dog"
    },
]

const petListReducer = (state = initialState, action) =>{

    if(action.type === FILTER_PETS)
    {
        console.log(action.payload)
        if(action.payload === "")
        {
            return initialState
        }
        else
        {
            return initialState.filter((pet)=>pet.type === action.payload) 
        }
    }
    else if(action.type === SET_PETS)
    {
        initialState = action.payload
        return initialState
    }
    return state

}

export default petListReducer