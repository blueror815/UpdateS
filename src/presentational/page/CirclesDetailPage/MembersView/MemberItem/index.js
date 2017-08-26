
import React from 'react';
import { Text, View, Image, TouchableOpacity, } from 'react-native';

import { images } from '../../../../../theme';
import { userType } from '../../../../../customPropType';
import styles from './style';

const MembreItem = ({user, removeMember}) => (
  <View style={styles.container}>
    <View style={styles.itemContainer}>  
      <View style={styles.photoContainer}>
        <Image style={styles.thumbProfile} source={images.profile_photo} />
      </View>  
      <View style={styles.colContainer}>
        <Text  style={styles.name} numberOfLines={1}>{user.pseudo}</Text>
      </View>
      <TouchableOpacity style={styles.removeContainter} onPress={() => removeMember(user)}>
        <Text style={styles.remove}>X</Text>
      </TouchableOpacity>
    </View>
  </View>
);

MembreItem.propTypes = {
  user: userType.isRequired
};


export default MembreItem;