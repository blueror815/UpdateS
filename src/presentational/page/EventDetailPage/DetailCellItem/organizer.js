import React from 'react';
import Relay from 'react-relay';
import { Text, View, Image, TouchableOpacity, } from 'react-native';

import userType from '../../../../../src/customPropType/user';

import images from '../../../../../src/theme/images';
import { styles } from './styles';


const Organizer = ({user, goToUser}) => (
  user && 
  <TouchableOpacity onPress={() => goToUser(user.id)} style={styles.container}>
    <View style={styles.row}>
      <View style={styles.imageContainer}>
        <Image style={styles.thumbProfile} source={images.profile_photo} />
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.row}>
          <Text style={styles.title} numberOfLines={1}>{user.pseudo}</Text>
          <Image style={[styles.iconLocation,styles.iconDarkBlue]} source={images.location} />
        </View>
        <View style={styles.row}>
          <Text style={styles.level}>averageRating {user.feedbacks.averageRating}</Text>
        </View>
        <View style={styles.rowBottom}>
          <Image style={[styles.iconLocation,styles.iconLightGrey]} source={images.activities} />
          <Text style={styles.location}>{user.feedbacks.count}</Text>
          <View style={styles.w_seperator} />
          <Image style={[styles.iconLocation,styles.iconBlue]} source={images.favourite} />
          <Text style={styles.location}>500</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

Organizer.propTypes = {
  user: userType,
  goToUser: React.PropTypes.func.isRequired

};

export default  Relay.createContainer(Organizer, {
  fragments: {
    user: () => Relay.QL`fragment on User{
      id
      feedbacks{
        averageRating
        count
      }
      pseudo
      avatar
    }`,
    
    
  }
});
