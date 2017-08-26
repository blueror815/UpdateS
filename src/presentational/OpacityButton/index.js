import React from 'react';

import {
  Text,
  TouchableOpacity
} from 'react-native';

// All styles are passed as props. (Check Settings (Login) Page)
const OpacityButton = ({ handlePress, buttonStyles, textStyles, text }) => (
  <TouchableOpacity
    onPress={handlePress}
    style={buttonStyles}
  >
    <Text style={textStyles}>
      {text}
    </Text>
  </TouchableOpacity>
);

export default OpacityButton;

OpacityButton.propTypes = {
  buttonStyles: React.PropTypes.number.isRequired,
  textStyles: React.PropTypes.number.isRequired,
  text: React.PropTypes.string.isRequired,
  handlePress: React.PropTypes.func.isRequired
};
