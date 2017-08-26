import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import style from './style';

const Buttom = ({onPress, children}) => (
  <TouchableOpacity
    style={style.button}
    onPress={onPress}
  >
    <Text style={style.text}>
      {children}
    </Text>
  </TouchableOpacity>
);

Buttom.propTypes = {
  children: React.PropTypes.node,
  onPress: React.PropTypes.func
};

export default Buttom;
