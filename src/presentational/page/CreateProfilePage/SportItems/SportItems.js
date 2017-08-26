import React from 'react';
import {
   View,
   Text,
   TouchableOpacity,
   Image
} from 'react-native';

import createProfileData from 'sportunity/src/dummyData/SportunityCreateProfile';
import { Actions } from 'react-native-router-flux';
import { images } from 'sportunity/src/theme';
import styles from './style';

const SportsItems = () => (
  <View style={styles.listContainer}>

    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>
        Present your sport and level
      </Text>
      <Image
        style={styles.icon}
        source={images.down_arrow}
      />
    </View>

    {createProfileData.sports.map((item, index) => (
      <View
        key={index}
        style={styles.sportItem}
      >

        <Text style={styles.sportText}>
          {item.name}

        </Text>

        <Text style={styles.sportText}>
          {item.level}
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
    <TouchableOpacity onPress={Actions.sports}>
      <Text style={[styles.sportText, styles.addText]}>
        ADD
      </Text>
    </TouchableOpacity>

  </View>
);

export default SportsItems;



// <Image
//   style={styles.image}
//   resizeMode="contain"
//   source={require(item.icon)}
// />
