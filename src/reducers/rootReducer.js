import userReducer from './userReducer'
import petListReducer from './petListReducer'
import {combineReducers} from 'redux'
import eventReducer from './eventReducer'

export default combineReducers({
    userReducer,
    petListReducer,
    eventReducer
})