import React from 'react';
import { View, Image } from 'react-native';

import { images } from 'sportunity/src/theme';
import styles from './style';

const LowerHeader = () => (
  <View style={styles.container}>

    <Image
      style={styles.icon}
      source={images.info}
      resizeMode="cover"
    />

    <Image
      style={styles.icon}
      source={images.list}
      resizeMode="cover"
    />

    <Image
      style={styles.icon}
      source={images.comments}
      resizeMode="cover"
    />

  </View>
);

export default LowerHeader;
