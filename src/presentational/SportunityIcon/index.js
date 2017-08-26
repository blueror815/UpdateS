import React, { PropTypes } from 'react';
import { Image } from 'react-native';

import styles from './style.js';


const SportunityIcon = ({ iconName, iconStyle }) => (
  <Image
    source={iconName}
    style={[styles.image, iconStyle || {}]}
  />
);

SportunityIcon.propTypes = {
  iconName: PropTypes.number.isRequired,
  iconStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
};

export default SportunityIcon;
