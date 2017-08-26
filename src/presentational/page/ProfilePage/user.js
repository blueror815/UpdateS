// import React, { PropTypes, Component} from 'react';
// import Relay from 'react-relay';
//
// import { QUERY_PROFILE_USER , QUERY_PROFILE } from '../../../query/profile';
// import Profile from './ProfilePage';
//
// const ProfileView = ({viewer:{me}}) => (<Profile user_profile={me} />);
// const ProfileUserView = ({viewer:{user}}) => (<Profile user_profile={user} />);
//
// export const ProfileUserPage =  Relay.createContainer(ProfileUserView, {
//   initialVariables: {
//     id: ''
//   },
//   fragments: {
//     viewer: () => QUERY_PROFILE_USER
//   }
// });
//
// export const ProfilePage =  Relay.createContainer(ProfileView, {
//   fragments: {
//     viewer: () => QUERY_PROFILE
//   }
// });
