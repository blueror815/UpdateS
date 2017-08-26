
import React, { PropTypes } from 'react';
import { TouchableOpacity } from 'react-native';

import styles from './style';


const SportunityButton = ({ stacked, buttonStyle, ...otherProps }) => (
  <TouchableOpacity
    {...otherProps}
    style={[
      stacked ? styles.column : styles.row,
      styles.container,
      buttonStyle
    ]}
  />
);

SportunityButton.propTypes = {
  stacked: PropTypes.bool,
  buttonStyle: PropTypes.any,
  ...TouchableOpacity.propTypes
};

export default SportunityButton;
