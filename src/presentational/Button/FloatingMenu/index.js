

import React from 'react';

import { View
       } from 'react-native';

import style from './style';

// import sportunityFilterKinds from '../../enums/sportunityFilterKinds';


const floatingMenu = ({ children }) => (
  <View style={style.content}>
    {children}
  </View>
);


floatingMenu.propTypes = {

  children: React.PropTypes.node
};

export default floatingMenu;

