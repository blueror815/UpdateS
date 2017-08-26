import React from 'react';
import { View, Image, Text } from 'react-native';

import { images } from 'sportunity/src/theme';
import styles from './style';

const UpperSubheader = () => (
  <View style={styles.container}>

    <View style={styles.iconContainer}>
      <Image
        style={styles.icon}
        source={images.y_heart}
        resizeMode="cover"
      />
      <Text style={styles.text}>
        500 FOLLOWERS
      </Text>
    </View>

    <View style={styles.photoContainer} />


    <View style={styles.iconContainer}>
      <Image
        style={styles.icon}
        source={images.activities}
        resizeMode="cover"
      />
      <Text style={styles.text}>
        50 ACTIVITIES
      </Text>
    </View>

  </View>
);

export default UpperSubheader;
