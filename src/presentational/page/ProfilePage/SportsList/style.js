import { StyleSheet } from 'react-native';

import { metrics, colors, fonts } from 'sportunity/src/theme';

export default StyleSheet.create({
  container: {
    marginHorizontal: 5,
    padding: metrics.baseMargin,
    backgroundColor: colors.snow,
    borderWidth: 1,
    borderColor: colors.steel,
    borderRadius: metrics.buttonRadius
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: metrics.baseMargin
  },
  name: {
    marginLeft: metrics.doubleBaseMargin,
    flex: 1,
    color: colors.skyBlue,
    fontSize: fonts.size.medium
  },
  level: {
    color: colors.skyBlue,
    alignSelf: 'flex-end',
    fontSize: fonts.size.medium
  }
});
