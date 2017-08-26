import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import sportsData from 'sportunity/src/dummyData/SportunitySports';
import { images } from 'sportunity/src/theme';
import styles from './style';

const UserSportList = () => (

  <ScrollView style={styles.container}>
    {
      sportsData.userSports.map((item, index) => (

        <View
          key={index}
          style={styles.itemContainer}
        >

          <View>
            <Text style={styles.name}>
              {item.name}
            </Text>
            <View style={styles.sportInfoContainer}>
              <Text style={styles.level}>
                BEGINNER;
              </Text>
              <Text style={styles.level}>
                MEDIUM;
              </Text>
              <Text style={styles.level}>
                EXPERT;
              </Text>
            </View>
          </View>

          <TouchableOpacity>
            <Image source={images.close_x} />
          </TouchableOpacity>

        </View>
      ))
    }
  </ScrollView>

);

export default UserSportList;
