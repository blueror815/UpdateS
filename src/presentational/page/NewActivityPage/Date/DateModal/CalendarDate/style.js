import { StyleSheet } from 'react-native';

import { metrics, colors, fonts } from 'sportunity/src/theme';

const style = StyleSheet.create({
  title: {
    color: colors.skyBlue,
    fontSize: fonts.size.regular,
    fontWeight: '500',
    margin: metrics.doubleBaseMargin
  },
  currentDayCircle: {
    backgroundColor: colors.skyBlue
  },
  currentDayText: {
    color: colors.skyBlue
  }
});

export default style;
