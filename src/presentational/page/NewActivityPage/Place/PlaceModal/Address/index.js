import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import style from './style';

const Address = ({ searchPlaceText, addAddress }) => (

  <TouchableOpacity
    style={style.container}
    onPress={() => addAddress(searchPlaceText)}
  >
    <View style={style.blueLine}>
      <Text style={style.whitetext}>
        Address
      </Text>
    </View>
    <Text style={style.text}>
      {searchPlaceText}
    </Text>
  </TouchableOpacity>

);

Address.propTypes = {
  searchPlaceText: React.PropTypes.string.isRequired,
  addAddress: React.PropTypes.func.isRequired,
};

export default Address;
