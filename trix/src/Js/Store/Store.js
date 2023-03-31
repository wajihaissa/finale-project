import {compose  ,applyMiddleware, legacy_createStore } from "redux"
import thunk from "redux-thunk";
import {rootReducers} from '../Reducer/index'
import serviceReducer from "../Reducer/StoreReducer";
import { userReducer } from "../Reducer/UserReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const Store = legacy_createStore(rootReducers,composeEnhancers(applyMiddleware(thunk)))
    