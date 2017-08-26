
import React,{ PropTypes } from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import icons from '../../../../theme/images';
import SportunitySummary from '../../../../customPropType/SportunitySummary';
import { styles } from '../styles';

const Button = ({goToChat}) => (
  <TouchableOpacity
    onPress={() => goToChat()}
    style={[styles.rowContainer, { marginTop: -3 }]}
  >
    <View style={{ flexDirection: 'row' }}>
      <Text style={styles.title} numberOfLines={1}>
        You can ask questions to the organizer
      </Text>
      <Image
        style={styles.icon}
        source={icons.tenis}
      />
    </View>
  </TouchableOpacity>
)

Button.propTypes = {
  sportunity: SportunitySummary.isRequired,
  goToChat: PropTypes.func.isRequired
};

export default Button;