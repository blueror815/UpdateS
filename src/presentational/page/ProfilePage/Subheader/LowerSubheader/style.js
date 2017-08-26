import { StyleSheet } from 'react-native';

import { metrics } from 'sportunity/src/theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: metrics.doubleBaseMargin
  },
  icon: {
    height: metrics.icons.small,
    width: metrics.icons.small
  }
});
