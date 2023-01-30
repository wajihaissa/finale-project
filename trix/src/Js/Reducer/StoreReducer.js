import {
  ADD_SERVICE,
  DELETE_SERVICE,
  GET_SERVICE,
  GET_SERVICE_FAIL,
  GET_SERVICE_SUCCESS,
} from "../Constates/store";

const initialState = {
  serviceList: [],
  errors: null,
  status: "",
};
const serviceReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SERVICE:
      return { ...state, status: "request send" };
    case GET_SERVICE_SUCCESS:
      return { ...state, status: "success", serviceList: payload };
    case GET_SERVICE_FAIL:
      return { ...state, status: "fail", errors: payload };

    case ADD_SERVICE:
      return { ...state, status: payload };
    case DELETE_SERVICE:
      return { ...state, status: payload };

    default:
      return state;
  }
};
export default serviceReducer;
