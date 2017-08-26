import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'sportunity/src/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: 160
  },
  itemContainer: {
    marginHorizontal: metrics.doubleBaseMargin,
    paddingVertical: metrics.doubleBaseMargin,
    borderBottomWidth: 1,
    borderBottomColor: colors.skyBlue,
    flexDirection: 'row',
    alignItems: 'center'
  },
  name: {
    paddingHorizontal: metrics.doubleBaseMargin,
    paddingVertical: 5,
    fontSize: fonts.size.regular,
    fontWeight: '400',
    color: colors.skyBlue
  }
});
