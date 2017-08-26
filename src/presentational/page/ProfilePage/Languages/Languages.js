import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';


const Languages = () => (
  <View style={styles.container}>
    <Text style={styles.text}>
      Languages
    </Text>

    <View style={styles.levelContainer}>
      <Text style={styles.text}>
        English
      </Text>
      <Text style={styles.text}>
        French
      </Text>
    </View>
  </View>
);

export default Languages;
