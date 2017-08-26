import React from 'react';
import Relay from 'react-relay';
import { ProfileRoute } from './ProfileRoute';
import ProfilePage from './ProfilePage.js';

const ProfileContainer = () => (
  <Relay.RootContainer
    route={new ProfileRoute()}
    Component={ProfilePage}
  />
);

export default ProfileContainer;
