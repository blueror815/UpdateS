import React from 'react';
import { View } from 'react-native';

import UpperSubheader from './UpperSubheader/UpperSubheader.js';
import LowerSubheader from './LowerSubheader/LowerSubheader.js';

import styles from './style';

const SubHeader = () => (
  <View style={styles.container}>
    <UpperSubheader />
    <LowerSubheader />
  </View>
);

export default SubHeader;
