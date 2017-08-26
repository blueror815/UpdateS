import * as types from '../../action/actionNames';

const defaultState = {
  isLoggedIn: false,
};

/**
 * Reducer for handling Drawer actions
 */
export default function (state = defaultState, action) {
  switch (action.type) {
    case types.IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.value
      };
    default: return state;
  }
}
