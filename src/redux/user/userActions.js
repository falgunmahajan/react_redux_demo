import axios from "axios";
import {
  fetch_User_Failure,
  fetch_User_Request,
  fetch_User_Success,
} from "./userTypes";

export const fetchUserRequest = () => {
  return {
    type: fetch_User_Request,
  };
};
export const fetchUserSuccess = (users) => {
  return {
    type: fetch_User_Success,
    payload: users,
  };
};
export const fetchUserFailure = (error) => {
  return {
    type: fetch_User_Failure,
    payload: error,
  };
};
export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const user = res.data;
        dispatch(fetchUserSuccess(user));
      })
      .catch((error) => {
        const errMsg = error.message;
        dispatch(fetchUserFailure(errMsg));
      });
  };
};
