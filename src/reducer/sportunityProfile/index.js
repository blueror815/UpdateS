import * as types from 'sportunity/src/action/actionNames';

const defaultState = {
  reportText: ''
};

/**
 * Reducer for handling Profile ctions
 */
export default function (state = defaultState, action) {
  switch (action.type) {
    case types.UPDATE_REPORT_TEXT:
      return {
        ...state,
        reportText: action.text
      };
    default: return state;
  }
}
