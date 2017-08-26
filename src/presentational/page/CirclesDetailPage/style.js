import { StyleSheet } from 'react-native';

import { metrics, colors } from '../../../theme';

export default StyleSheet.create({
  container: {
    marginTop: metrics.navBarHeight,
    paddingTop: metrics.marginHorizontal,
    flex: 1,
    backgroundColor: colors.background
  },
});
