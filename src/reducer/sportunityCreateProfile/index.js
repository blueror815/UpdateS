import * as types from '../../action/actionNames';

const defaultState = {
  isCreatingProfile: false,
  imageUrl: '',
  name: '',
  email: '',
  password: '',
  phone: 0,
  country: '',
  city: '',
  zip: 0,
  adress: '',
  description: '',
  errors: {}
};

/**
 * Reducer for handling Profile actions
 */
export default function (state = defaultState, action) {
  switch (action.type) {
    case types.CREATING_PROFILE:
      return {
        ...state,
        isCreatingProfile: action.value
      };

    case types.UPDATE_PROFILE_IMAGE_URL:
      return {
        ...state,
        imageUrl: action.url
      };

    case types.UPDATE_NAME:
      return {
        ...state,
        name: action.text
      };

    case types.UPDATE_EMAIL:
      return {
        ...state,
        email: action.text
      };
    case types.UPDATE_PASSWORD:
      return {
        ...state,
        password: action.text
      };

    case types.UPDATE_PHONE:
      return {
        ...state,
        phone: action.number
      };

    case types.UPDATE_COUNTRY:
      return {
        ...state,
        country: action.text
      };

    case types.UPDATE_CITY:
      return {
        ...state,
        city: action.text
      };

    case types.UPDATE_ZIP:
      return {
        ...state,
        zip: action.number
      };
    case types.UPDATE_ADRESS:
      return {
        ...state,
        adress: action.text
      };
    case types.UPDATE_DESCRIPTION:
      return {
        ...state,
        description: action.text
      };
    case types.VALIDATE_CREATE_PROFILE_INPUTS:
      return {
        ...state,
        errors: action.errors
      };

    default: return state;
  }
}
