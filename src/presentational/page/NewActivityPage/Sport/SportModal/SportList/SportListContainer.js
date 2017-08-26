import React from 'react';
import Relay from 'react-relay';
import { SportListRoute } from './SportListRoute';
import SportList from './SportList.js';

const SportListContainer = () => (
  <Relay.RootContainer
    route={new SportListRoute()}
    Component={SportList}
  />
);

export default SportListContainer;
