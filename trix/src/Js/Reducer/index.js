import {combineReducers} from 'redux'
import { userReducer } from './UserReducer'
import serviceReducer from './StoreReducer'
export const rootReducers=combineReducers({userReducer, serviceReducer})