import { StyleSheet } from 'react-native';

import {
  metrics,
  colors,
  fonts
} from 'sportunity/src/theme';

export default StyleSheet.create({
  container: {
    marginTop: metrics.navBarHeight,
    paddingVertical: metrics.doubleBaseMargin,
    paddingHorizontal: 10,
  },
  leftText: {
    paddingHorizontal: 20,
    fontSize: fonts.size.small,
    color: colors.skyBlue,
    alignSelf: 'flex-start',
    marginVertical: metrics.baseMargin
  },
  descriptionText: {
    fontSize: fonts.size.medium,
    marginVertical: metrics.baseMargin,
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  errorText: {
    fontSize: fonts.size.reguler,
    alignSelf: 'center',
    color: colors.error,
    marginBottom: metrics.baseMargin,
    fontWeight: '500'
  }
});
