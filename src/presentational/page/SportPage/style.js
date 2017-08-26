import { StyleSheet } from 'react-native';

import { metrics } from 'sportunity/src/theme';

export default StyleSheet.create({
  container: {
    marginTop: metrics.navBarHeight,
    flex: 1,
    paddingVertical: metrics.doubleBaseMargin,
  }
});
