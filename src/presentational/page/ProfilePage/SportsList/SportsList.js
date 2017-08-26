import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './style';

const SportsList = ({ sports }) => (
  <View>
    {
      sports.length > 0 ?
        sports.map((item, index) => (
          <View
            style={styles.container}
            key={index}
          >
            <View style={styles.itemContainer}>
              <Image source={{uri: item.sport.logo}} />
              <Text style={styles.name} >
                {item.sport.name.EN}
              </Text>
              <Text style={styles.name} >
                {item.sport.levels.slice(-1)[0].EN.name}
              </Text>
            </View>
          </View>
        ))
        : null
    }

  </View>

);

export default SportsList;

SportsList.propTypes = {
  sports: React.PropTypes.array.isRequired,
};
