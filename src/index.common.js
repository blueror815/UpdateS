
import React from 'react';
import Relay from 'react-relay';
import { Provider } from 'react-redux';
import { AppRegistry, AsyncStorage } from 'react-native';
import conf from 'sportunity/conf/constants.json';
import SportunityDrawer from 'sportunity/src/presentational/Drawer';
import * as firebase from 'firebase';

import store from './store';

Relay.injectNetworkLayer(new Relay.DefaultNetworkLayer(conf.backendUrl));

AsyncStorage.getItem('authToken').then((token) => {
  if(token){
    Relay.injectNetworkLayer(
      new Relay.DefaultNetworkLayer(conf.backendUrl, {
        headers: {
          token: token
        }
      })
    );
  } else {
    return false;
  }
});


// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyA_Sru-k3COblApmEQGMnpxqx2kOFB8nFk",
  authDomain: "sportunity-151910.firebaseapp.com",
  databaseURL: "https://sportunity-151910.firebaseio.com",
  storageBucket: "sportunity-151910.appspot.com",
});

const sportunity = () => (
  <Provider store={store}>
    <SportunityDrawer />
  </Provider>
);

AppRegistry.registerComponent('sportunity', () => sportunity);
