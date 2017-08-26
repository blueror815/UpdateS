import * as types from './actionNames';
/**
 * Triggered when user saves profile image
 */
export function updateProfileImageUrl(url) {
  return {
    type: types.UPDATE_PROFILE_IMAGE_URL,
    url
  };
}

/**
 * Triggered when name input text changes
 */
export function updateName(text) {
  return {
    type: types.UPDATE_NAME,
    text
  };
}

/**
 * Triggered when email input text changes
 */
export function updateEmail(text) {
  return {
    type: types.UPDATE_EMAIL,
    text
  };
}
/**
 * Triggered when password input text changes
 */
export function updatePassword(text) {
  return {
    type: types.UPDATE_PASSWORD,
    text
  };
}

/**
 * Triggered when phone input text changes
 */
export function updatePhone(number) {
  return {
    type: types.UPDATE_PHONE,
    number
  };
}

/**
 * Triggered when country input text changes
 */
export function updateCountry(text) {
  return {
    type: types.UPDATE_COUNTRY,
    text
  };
}

/**
 * Triggered when country input text changes
 */
export function updateCity(text) {
  return {
    type: types.UPDATE_CITY,
    text
  };
}

/**
 * Triggered when zip code input text changes
 */
export function updateZip(number) {
  return {
    type: types.UPDATE_ZIP,
    number
  };
}

/**
 * Triggered when adress input text changes
 */
export function updateAdress(text) {
  return {
    type: types.UPDATE_ADRESS,
    text
  };
}

/**
 * Triggered when description text area changes
 */
export function updateDescription(text) {
  return {
    type: types.UPDATE_DESCRIPTION,
    text
  };
}

/**
<<<<<<< HEAD
=======
 * Triggered when langages are selected
 */
export function updateLanguages(text) {
  return {
    type: types.UPDATE_LANGUAGES,
    text
  };
}

/**
 * Triggered when sports are selected
 */
export function updateSports(text) {
  return {
    type: types.UPDATE_SPORTS,
    text
  };
}

/**
 * Triggered when sport remove button is pressed
 */
export function removeSport(index) {
  return {
    type: types.REMOVE_SPORT,
    index
  };
}

/**
 * Triggered when payment remove button is pressed
 */
export function removePayment(index) {
  return {
    type: types.REMOVE_PAYMENT,
    index
  };
}

/**
 * Triggered when sport remove button is pressed
 */
export function removePayoff(index) {
  return {
    type: types.REMOVE_PAYOFF,
    index
  };
}

/**
 * Triggered when profile is created is succesfull
 */
export function signupSuccess(userData) {
  return {
    type: types.SIGNUP_SUCCESS,
    userData
  };
}

/**
 * Triggered when profile creation has failed
 */
export function signupError(error) {
  return {
    type: types.SIGNUP_ERROR,
    error
  };
}

/**
 * Triggered when network request is active
 * Used for activity indicator
 */
export function creatingProfile(value) {
  return {
    type: types.CREATING_PROFILE,
    value
  };
}
/**
 * Used for validating inputs
 */
export function validateInputs(errors) {
  return {
    type: types.VALIDATE_CREATE_PROFILE_INPUTS,
    errors
  };
}
