import { AsyncStorage } from 'react-native';
import * as types from './actionNames';

/**
 * Triggered to check if user is logged in
 * Used for updating drawerContent
 */
export const isLoggedIn = (value) => ({
  type: types.IS_LOGGED_IN,
  value
})
/**
 * Triggered when app is starting
 */
export const verifyAuth = () => (
  (dispatch) => (
    AsyncStorage.getItem('authToken')
      .then((token) => {
        if(token){
          // TODO: verify if token is valid
          dispatch(isLoggedIn(true));
        } else {
          dispatch(isLoggedIn(false));
        }
      }
    )
  )
);
/**
 *  LOGOUT
 * Triggered when logout button is pressed
 */
export const logout = () => (
  (dispatch) => (
    AsyncStorage.setItem('authToken', '')
      .then(() => {
        dispatch(isLoggedIn(false));
      }
    )
  )
);
