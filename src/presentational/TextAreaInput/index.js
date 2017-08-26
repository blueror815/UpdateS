import React from 'react';

import {
  View,
  TextInput,
  Image
} from 'react-native';

import { images } from '../../theme';
import textAreaStyles from './style';

const TextAreaInput = (props) => (
  <View style={textAreaStyles.textAreaContainer}>
    <TextInput
      style={props.textAreaStyles}
      multiline
      autoCorrect={false}
      numberOfLines={props.numberOfLines}
      placeholderTextColor="#2a7267"
      placeholder={props.placeholder}
      defaultValue={props.defaultValue}
      autoCapitalize="none"
      secureText={props.secureText}
      onChangeText={props.updateText}
    />
    <Image
      style={props.textAreaIconStyles}
      source={images.pen}
    />
  </View>
);

export default TextAreaInput;

TextAreaInput.propTypes = {
  updateText: React.PropTypes.func.isRequired,
  placeholder: React.PropTypes.string.isRequired,
  textAreaStyles: React.PropTypes.any.isRequired,
  numberOfLines: React.PropTypes.number,
  defaultValue: React.PropTypes.string || '',
  secureText: React.PropTypes.bool,
  textAreaIconStyles: React.PropTypes.any.isRequired
};
