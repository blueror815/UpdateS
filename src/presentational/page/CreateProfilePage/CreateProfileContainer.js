import React from 'react';
import Relay from 'react-relay';
import CreateProfilePage from './CreateProfilePage.js';

/**
 *  Create Profile Root Container
 */
const CreateProfileContainer = () => (
  <Relay.RootContainer
    route={new CreateProfileRoute()}
    Component={CreateProfilePage}
  />
);

/**
 *  Create Profile Route
 */
class CreateProfileRoute extends Relay.Route {
  static routeName = 'CreateProfileRoute';
  static queries = {
    viewer: () => Relay.QL`
      query {
        viewer
      }`
    ,
  };
}

export default CreateProfileContainer;
