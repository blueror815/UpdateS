import React,{ PropTypes } from 'react';

import { View, Text, Image, TouchableOpacity, } from 'react-native';
import { styles } from './styles';
import icons from '../../../../src/theme/images';

const Cancelation = ({onPress, cancel}) => (
  <View style={styles.rowContainer}>
    {
      cancel &&
      <View>
        <Text style={styles.desc} numberOfLines={4}>
          If we find someone who wants to take your place 
          it will cost you only 2 USD 
          otherwise there won’t be any refund
        </Text>
      </View>
    }

    <TouchableOpacity onPress={onPress} style={styles.rowPolicy}>
      <Text style={styles.policy}>Cancelation policy</Text>
      <View style={styles.right_column}>
        <Image style={styles.icon} source={icons.red_user} />
      </View>
    </TouchableOpacity>
  </View>
)

Cancelation.propTypes = {
  onPress: PropTypes.func,
  cancel: PropTypes.bool.isRequired,
};

export default Cancelation;