import React from 'react';
import {
   View,
   Text,
   Image
} from 'react-native';

import createProfileData from 'sportunity/src/dummyData/SportunityCreateProfile';
import { images } from 'sportunity/src/theme';
import styles from './style';

const createItem = (item) => (
  <Text
    style={[styles.languageItem, styles.languageText]}
    key={item}
  >
    {item}
  </Text>
);
const LanguageItems = () => (
  <View style={styles.listContainer}>

    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>
        Language(s)
      </Text>
      <Image
        style={styles.icon}
        source={images.down_arrow}
      />
    </View>

    {createProfileData.languages.map(createItem)}

    <Text style={[styles.languageText, styles.addText]}>
      ADD
    </Text>
  </View>
);

export default LanguageItems;
