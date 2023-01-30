import {compose , legacy_createStore ,applyMiddleware } from "redux"
import thunk from "redux-thunk";
import serviceReducer from "../Reducer/StoreReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const Store = legacy_createStore (serviceReducer,
    composeEnhancers(applyMiddleware(thunk))

);
