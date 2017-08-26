import { StyleSheet } from 'react-native';

import { metrics, colors, fonts } from 'sportunity/src/theme';

export default StyleSheet.create({
  container: {
    flex: -1,
    height: 160
  },
  itemContainer: {
    paddingHorizontal: metrics.doubleBaseMargin,
    paddingVertical: 5,
    borderBottomWidth: 3,
    borderBottomColor: colors.steel,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  sportInfoContainer: {
    flexDirection: 'row'
  },
  name: {
    fontSize: fonts.size.h6,
    fontWeight: '600',
    color: colors.skyBlue
  },
  level: {
    marginRight: metrics.baseMargin,
    marginTop: metrics.baseMargin,
    fontSize: fonts.size.small,
    color: colors.skyBlue
  }
});
