
import React from 'react';
import { Text, View, Image } from 'react-native';
import Relay from 'react-relay';

import { images } from '../../../../../../src/theme';
import { userType } from '../../../../../../src/customPropType';
import styles from './style';

const ParticipantItem = ({user}) => (
  <View style={styles.container}>
    <View style={styles.itemContainer}>  
      <View style={styles.photoContainer}>
        <Image style={styles.thumbProfile} source={images.profile_photo} />
      </View>  
      <View style={styles.colContainer}>
        <Text  style={styles.name} numberOfLines={1}>{user.pseudo}</Text>
      </View>
      <View style={styles.colContainer} >
        <Text style={styles.level} numberOfLines={1}>EXPERT</Text>
      </View>
      <View style={styles.iconContainer} >
        <Image style={[styles.iconLocation,styles.iconLightGrey]} source={images.activities} />
        <Text style={styles.location}>2</Text>
        <View style={styles.w_seperator} />
        <Image style={[styles.iconLocation,styles.iconBlue]} source={images.favourite} />
        <Text style={styles.location}>500</Text>
        <Image style={[styles.iconLocation,styles.iconDarkBlue]} source={images.favourite} /> 
      </View>
    </View>
  </View>
);

ParticipantItem.propTypes = {
  user: userType.isRequired
};


export default  Relay.createContainer(ParticipantItem, {
  fragments: {
    user: () => Relay.QL`fragment on User{
      firstName
      lastName
      pseudo
      id
    }`
  }
});