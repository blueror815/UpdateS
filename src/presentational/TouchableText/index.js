import React from 'react';

import {
  Text,
  TouchableOpacity
} from 'react-native';

// All styles are passed as props. (Check Settings (Login) Page)
const TouchableText = ({ handlePress, textStyles, text }) => (
  <TouchableOpacity onPress={handlePress}>
    <Text style={textStyles}>
      {text}
    </Text>
  </TouchableOpacity>
);

export default TouchableText;

TouchableText.propTypes = {
  text: React.PropTypes.string.isRequired,
  textStyles: React.PropTypes.number.isRequired,
  handlePress: React.PropTypes.func.isRequired
};
