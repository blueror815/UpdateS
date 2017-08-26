import { StyleSheet } from 'react-native';

import { metrics, colors, fonts } from 'sportunity/src/theme';

export default StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    marginHorizontal: 5,
    marginTop: 5,
    padding: 5,
    backgroundColor: colors.snow,
    borderWidth: 1,
    borderColor: colors.steel,
    borderRadius: metrics.buttonRadius
  },
  headerText: {
    marginLeft: metrics.baseMargin,
    flex: 1,
    color: colors.skyBlue,
    fontSize: fonts.size.medium
  },
  headerIcon: {
    alignSelf: 'flex-end',
    marginRight: metrics.doubleBaseMargin
  },
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
    paddingLeft: metrics.baseMargin
  },
  name: {
    marginLeft: metrics.doubleBaseMargin,
    flex: 1,
    color: colors.skyBlue,
    fontSize: fonts.size.medium
  },
  closeIcon: {
    alignSelf: 'flex-end'
  },
});
