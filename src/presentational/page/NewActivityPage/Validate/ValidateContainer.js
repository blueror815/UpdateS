import React from 'react';
import Relay from 'react-relay';
import Validate from './Validate.js';

/**
 *  RELAY ROOT CONTAINER
 */
const ValidateContainer = () => (
  <Relay.RootContainer
    route={new NewActivityValidateRoute()}
    Component={Validate}
  />
);

/**
 *  RELAY ROUTE
 */
class NewActivityValidateRoute extends Relay.Route {
  static routeName = 'NewActivityValidateRoute';
  static queries = {
    user_profile: Component => Relay.QL`
      query {
        viewer {
          ${Component.getFragment('user_profile')}
        }
      }
    `,
    viewer: () => Relay.QL`
      query {
        viewer
      }`
    ,
  };
}

export default ValidateContainer;
