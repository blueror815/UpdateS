import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'sportunity/src/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: 160
  },
  itemContainer: {
    paddingHorizontal: metrics.doubleBaseMargin,
    paddingVertical: 5,
    borderBottomWidth: 2,
    borderBottomColor: colors.steel,
    flexDirection: 'row',
    alignItems: 'center'
  },
  name: {
    paddingHorizontal: metrics.doubleBaseMargin,
    paddingVertical: 5,
    fontSize: fonts.size.h6,
    fontWeight: '600',
    color: colors.windowTint
  }
});
