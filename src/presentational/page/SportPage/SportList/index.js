import React from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';

import sportsData from 'sportunity/src/dummyData/SportunitySports';
import styles from './style';

const SportList = () => (

  <ScrollView style={styles.container}>

    {sportsData.sports.map((item, index) => (
      <View
        key={index}
        style={styles.itemContainer}
      >

        <Text style={styles.name}>
          {item.name}
        </Text>

      </View>
    ))}

  </ScrollView>

);

export default SportList;
