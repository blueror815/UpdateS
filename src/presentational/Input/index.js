import React from 'react';
import {
  View,
  TextInput,
  Image
} from 'react-native';

import { images, colors } from 'sportunity/src/theme';
import styles from './style';

const Input = (props) => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.input}
      autoCorrect={false}
      numberOfLines={props.numberOfLines}
      placeholderTextColor={colors.skyBlue}
      placeholder={props.placeholder}
      defaultValue={props.defaultValue}
      autoCapitalize="none"
      secureText={props.secureText}
      onChangeText={props.updateText}
      underlineColorAndroid="transparent"
      keyboardType={props.keyboardType}
      secureTextEntry={props.secureTextEntry}
    />
    <Image
      style={props.inputIconStyles}
      source={images.pen}
    />
  </View>
);

export default Input;

Input.propTypes = {
  updateText: React.PropTypes.func.isRequired,
  placeholder: React.PropTypes.string.isRequired,
  numberOfLines: React.PropTypes.number,
  defaultValue: React.PropTypes.string || '',
  secureText: React.PropTypes.bool,
  inputIconStyles: React.PropTypes.number.isRequired,
  keyboardType: React.PropTypes.string,
  secureTextEntry: React.PropTypes.bool,
};
