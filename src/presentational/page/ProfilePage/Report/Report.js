import React from 'react';
import { Text, View, Image, TextInput } from 'react-native';

import { images, colors } from 'sportunity/src/theme';

import styles from './style';

const Report = () => (
  <View>

    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>
        Report user
      </Text>
      <Image
        style={styles.headerIcon}
        source={images.down_arrow}
      />
    </View>


    <View style={styles.container}>

      <View style={styles.textAreaContainer}>
        <TextInput
          multiline
          style={styles.textAreaInput}
          placeholder="Report user"
          placeholderTextColor={colors.skyBlue}
          numberOfLines={10}
        />
        <Image
          style={styles.textAreaIcon}
          source={images.pen}
        />
      </View>
      <Image
        style={styles.closeIcon}
        source={images.close_x}
      />

    </View>

    <View style={styles.footer} />

  </View>

);

export default Report;
