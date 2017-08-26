import React, { PropTypes } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Relay from 'react-relay';

import { circleType } from '../../../../customPropType';
import { styles } from './style';
import { images } from '../../../../theme';
import DeleteCircleMutation from  '../mutation/DeleteCircle';

const CirclesItem  = ({ circle, goToCircles, deleteCircle }) => (
  <View style={styles.markerOverlayContainer}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.leftContainer} onPress={() => goToCircles(circle)}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={images.circleLarge}>
              <Text style={styles.members}>{circle.members.length}</Text>
            </Image>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {circle.name}
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.rightContainer}>
          <TouchableOpacity style={styles.closeContainer} onPress={() => deleteCircle(circle)}>
            <Text style={styles.title} numberOfLines={1}>
              X
            </Text>
          </TouchableOpacity>
          <View style={styles.ellipseContainer}>
            <Image style={styles.ellipseBar} source={images.ellipse_bar} />
          </View>
        </View>
      </View>
  </View>
);

CirclesItem.propTypes = {
  circle: circleType.isRequired,
  goToCircles: PropTypes.func.isRequired,
  deleteCircle: PropTypes.func.isRequired
};

export default Relay.createContainer(CirclesItem, {
  fragments: {
    circle: () => Relay.QL`
      fragment on Circle{
        id
        name
        members{
          id
        }
        ${DeleteCircleMutation.getFragment('circle')}
      }`
  }
});
