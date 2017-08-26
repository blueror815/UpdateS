import React from 'react';
import { Text, View } from 'react-native';

import styles from './style';

const Description = () => (
  <View style={styles.container}>
    <Text style={styles.text}>

      <Text style={styles.capitalWord}>
        {'Description  '}
      </Text>
      <Text>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
         tempor incididunt ut labore et dolore magna aliqua.
      </Text>

    </Text>
  </View>
);

export default Description;
