import {
    GET_SERVICE,
    GET_SERVICE_SUCCESS,
    GET_SERVICE_FAIL,
    ADD_SERVICE,
    DELETE_SERVICE,
  } from "../Constates/store";
  import axios from "axios";




  export const getservice = () => async (dispatch) => {
    dispatch({ type: GET_SERVICE });
    try {
      let result = await axios.get("/service/all");
      dispatch({ type: GET_SERVICE_SUCCESS, payload: result.data.result });
    } catch (error) {
      dispatch({ type: GET_SERVICE_FAIL, payload: error.data });
      console.log(error);
    }
  };

  export const addservice = (newservice) => async (dispatch) => {
    try {
      let result = axios.post("/service/addservice", newservice);
      dispatch({ type: ADD_SERVICE, payload: "service added" });
      dispatch(getservice());
    } catch (error) {
      dispatch({ type: GET_SERVICE_FAIL, payload: error.data });
      console.log(error);
    }
  };
  
  export const deleteservice = ({id}) => async (dispatch) => {
    try {
      let result = axios.delete(`/service/${id}`);
      dispatch({ type: DELETE_SERVICE});
      dispatch(getservice());
    } catch (error) {
      dispatch({ type: GET_SERVICE_FAIL, payload: error.data });
      console.log(error);
    }
  };