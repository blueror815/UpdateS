import {
  StyleSheet
} from 'react-native';

import { metrics, fonts, colors } from 'sportunity/src/theme';

export default StyleSheet.create({
  container: {
    marginTop: metrics.navBarHeight,
    flex: 1,
    justifyContent: 'space-around',
    paddingVertical: metrics.doubleBaseMargin,
  },
  inputsContainer: {
    height: 100
  },
  centerText: {
    fontSize: fonts.size.regular,
    color: colors.skyBlue,
    alignSelf: 'center',
    marginVertical: metrics.doubleBaseMargin
  },
  errorText: {
    fontSize: fonts.size.small,
    color: colors.red,
    alignSelf: 'center',
    marginVertical: metrics.doubleBaseMargin
  },
  activityIndicator: {
    position: 'absolute'
  }
});
