import React from 'react';
import { Text, View, Image } from 'react-native';

import { images } from 'sportunity/src/theme';
import styles from './style';

const Block = () => (
  <View style={styles.container}>
    <Text style={styles.text}>
      Block user
    </Text>
    <Image
      source={images.block}
    />
  </View>
);

export default Block;
