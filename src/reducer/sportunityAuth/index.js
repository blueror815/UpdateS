import * as types from '../../action/actionNames';

const defaultState = {
  email: '',
  password: '',
  isLoggedIn: false,
  isFetching: false,
  errorMessage: '',
  userData: {}
};

/**
 * Reducer for handling Auth actions
 */
export default function (state = defaultState, action) {
  switch (action.type) {
    case types.UPDATE_EMAIL:
      return {
        ...state,
        email: action.text,
      };

    case types.UPDATE_PASSWORD:
      return {
        ...state,
        password: action.text
      };

    case types.FETCHING_DATA:
      return {
        ...state,
        isFetching: true,
        errorMessage: ''
      };

    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isFetching: false,
        userData: action.userData,
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage
      };

    default: return state;
  }
}
