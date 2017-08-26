import React from 'react';

import {
  ActivityIndicator,
} from 'react-native';

import styles from './style';

// Needs to be updated
// isAnimating prop is used to show/hide indicator
const ActivityIndicatorLoader = ({ isAnimating }) => (
  <ActivityIndicator
    animating={isAnimating}
    style={styles.ActivityIndicator}
    size="large"
  />
);

export default ActivityIndicatorLoader;

ActivityIndicatorLoader.propTypes = {
  isAnimating: React.PropTypes.bool.isRequired
};
