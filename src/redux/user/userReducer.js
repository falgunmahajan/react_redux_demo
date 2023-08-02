import {
  fetch_User_Failure,
  fetch_User_Request,
  fetch_User_Success,
} from "./userTypes";

const initialState = {
  loading: false,
  users: [],
  error: "",
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetch_User_Request: {
      return {
        ...state,
        loading: true,
      };
    }
    case fetch_User_Success: {
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    }
    case fetch_User_Failure: {
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
