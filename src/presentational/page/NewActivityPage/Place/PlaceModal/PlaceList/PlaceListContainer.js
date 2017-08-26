import React from 'react';
import Relay from 'react-relay';
import { PlaceListRoute } from './PlaceListRoute';
import PlaceList from './PlaceList.js';

const PlaceListContainer = () => (
  <Relay.RootContainer
    route={new PlaceListRoute()}
    Component={PlaceList}
  />
);

export default PlaceListContainer;
