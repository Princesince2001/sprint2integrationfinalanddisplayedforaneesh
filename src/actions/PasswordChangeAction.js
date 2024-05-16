export const SET_OLD_PASSWORD = 'SET_OLD_PASSWORD';
export const SET_NEW_PASSWORD = 'SET_NEW_PASSWORD';
export const SET_CONFIRM_PASSWORD = 'SET_CONFIRM_PASSWORD';
export const SET_ERROR = 'SET_ERROR';
export const SET_PASSWORD_MATCH = 'SET_PASSWORD_MATCH';
export const UPDATE_PASSWORD_BEGIN = 'UPDATE_PASSWORD_BEGIN';
export const UPDATE_PASSWORD_SUCCESS = 'UPDATE_PASSWORD_SUCCESS';
export const UPDATE_PASSWORD_FAILURE = 'UPDATE_PASSWORD_FAILURE';

export const setOldPassword = (password) => ({
  type: SET_OLD_PASSWORD,
  payload: password,
});

export const setNewPassword = (password) => ({
  type: SET_NEW_PASSWORD,
  payload: password,
});

export const setConfirmPassword = (password) => ({
  type: SET_CONFIRM_PASSWORD,
  payload: password,
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

export const setIsPasswordMatch = (isMatch) => ({
  type: SET_PASSWORD_MATCH,
  payload: isMatch,
});

export const updatePasswordBegin = () => ({
  type: UPDATE_PASSWORD_BEGIN,
});

export const updatePasswordSuccess = (message) => ({
  type: UPDATE_PASSWORD_SUCCESS,
  payload: message,
});

export const updatePasswordFailure = (error) => ({
  type: UPDATE_PASSWORD_FAILURE,
  payload: error,
});