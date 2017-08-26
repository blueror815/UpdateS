import React from 'react';
import {
   View,
   Text,
   TouchableOpacity,
   Image
} from 'react-native';

import createProfileData from 'sportunity/src/dummyData/SportunityCreateProfile';
import { images } from 'sportunity/src/theme';
import styles from './style';

const PaymentMethods = () => (
  <View style={styles.listContainer}>
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>
        Payment methods
      </Text>
      <Image
        style={styles.icon}
        source={images.down_arrow}
      />
    </View>

    {createProfileData.payments.map((item, index) => (
      <View
        key={index}
        style={styles.paymentItem}
      >
        <Text
          style={styles.paymentText}
        >
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

    <Text style={[styles.paymentText, styles.addText]}>
      ADD
    </Text>
  </View>
);

export default PaymentMethods;

// <Image
//   style={styles.image}
//   resizeMode="contain"
//   source={require(item.image)}
// />
