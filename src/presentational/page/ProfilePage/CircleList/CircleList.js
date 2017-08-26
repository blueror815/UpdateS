import React from 'react';
import { Text, View, Image } from 'react-native';

import { images } from 'sportunity/src/theme';
import styles from './style';

const CircleList = ({ circles }) => (
  <View>
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>
        In a Circle
      </Text>
      <Image
        style={styles.headerIcon}
        source={images.down_arrow}
      />
    </View>

    {
      circles.length > 0 ?
        circles.map((item, index) => (
          <View
            style={styles.container}
            key={index}
          >
            <View style={styles.itemContainer}>
              <Image source={images.circle} />
              <Text style={styles.name} >
                {item.node.name}
              </Text>
              <Image
                style={styles.closeIcon}
                source={images.close_x}
              />
            </View>
          </View>
        ))
        : null
    }

  </View>

);

CircleList.propTypes = {
  circles: React.PropTypes.array.isRequired,
};

export default CircleList;
