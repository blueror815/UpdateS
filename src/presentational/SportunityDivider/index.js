import React, { PropTypes } from 'react';
import { View } from 'react-native';

import styles from './style';

const computeStyle = (vertical, horizontal) => ({
  marginVertical: vertical,
  marginHorizontal: horizontal
});

const SportunityDivider = ({ vertical, horizontal, bordered }) => (
  <View
    style={[
      computeStyle(vertical, horizontal),
      bordered && styles.bordered,
    ]}
  />
);

SportunityDivider.propTypes = {
  vertical: PropTypes.number,
  horizontal: PropTypes.number,
  bordered: PropTypes.bool,
};

SportunityDivider.defaultProps = {
  vertical: 2,
  horizontal: 0,
  bordered: false,
};

export default SportunityDivider;
