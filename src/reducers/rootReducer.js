import userReducer from './userReducer'
import petListReducer from './petListReducer'
import {combineReducers} from 'redux'

export default combineReducers({
    userReducer,
    petListReducer,
})