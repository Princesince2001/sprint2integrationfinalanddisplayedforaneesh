// import { SET_OLD_PASSWORD,SET_NEW_PASSWORD,SET_CONFIRM_PASSWORD,SET_ERROR,SET_PASSWORD_MATCH,UPDATE_PASSWORD_BEGIN,UPDATE_PASSWORD_BEGIN,UPDATE_PASSWORD_SUCCESS,UPDATE_PASSWORD_FAILURE } from "../actions/PasswordChangeAction";
import {
  SET_OLD_PASSWORD,
  SET_NEW_PASSWORD,
  SET_CONFIRM_PASSWORD,
  SET_ERROR,
  SET_PASSWORD_MATCH,
  UPDATE_PASSWORD_BEGIN,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAILURE
} from '../../src/actions/PasswordChangeAction'; 


const initialState = {
    learnerId: '97ffbe0f-4685-44de-a1fb-a48f6f52f079',
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
    error: '',
    isPasswordMatch: false,
    isLoading: false,
  };
  
  const passwordChangeReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_OLD_PASSWORD:
        return {
          ...state,
          oldPassword: action.payload,
        };
      case SET_NEW_PASSWORD:
        return {
          ...state,
          newPassword: action.payload,
        };
      case SET_CONFIRM_PASSWORD:
        return {
          ...state,
          confirmPassword: action.payload,
        };
      case SET_ERROR:
        return {
          ...state,
          error: action.payload,
        };
      case SET_PASSWORD_MATCH:
        return {
          ...state,
          isPasswordMatch: action.payload,
        };
      case UPDATE_PASSWORD_BEGIN:
        return {
          ...state,
          isLoading: true,
        };
      case UPDATE_PASSWORD_SUCCESS:
        return {
          ...state,
          isLoading: false,
        };
      case UPDATE_PASSWORD_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default passwordChangeReducer;
  