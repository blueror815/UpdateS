import React from 'react';
import {
   View,
   Text,
   Image,
   TouchableOpacity
} from 'react-native';

import createProfileData from 'sportunity/src/dummyData/SportunityCreateProfile';
import { images } from 'sportunity/src/theme';
import styles from './style';

const PayoffItems = () => (
  <View style={styles.listContainer}>

    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>
        Payoff methods
      </Text>
      <Image
        style={styles.icon}
        source={images.down_arrow}
      />
    </View>

    {createProfileData.payoffs.map((item, index) => (
      <View
        key={index}
        style={styles.payoffItem}
      >

        <Text style={styles.payoffText}>
          {item.number}
        </Text>

        <TouchableOpacity>
          <Image
            style={styles.icon}
            resizeMode="contain"
            source={images.close_x}
          />
        </TouchableOpacity>

      </View>
    ))}

    <Text style={[styles.payoffText, styles.addText]}>
      ADD
    </Text>

  </View>
);

export default PayoffItems;


// <Image
//   style={styles.image}
//   resizeMode="contain"
//   source={require(item.image)}
// />
