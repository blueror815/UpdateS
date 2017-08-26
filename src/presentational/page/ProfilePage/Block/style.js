import { StyleSheet } from 'react-native';

import { metrics, colors, fonts } from 'sportunity/src/theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    marginBottom: 5,
    padding: metrics.doubleBaseMargin,
    backgroundColor: colors.snow,
    borderWidth: 1,
    borderColor: colors.steel,
    borderRadius: metrics.buttonRadius
  },
  text: {
    fontSize: fonts.regular,
    color: colors.skyBlue,
    flex: -1,
  }
});
