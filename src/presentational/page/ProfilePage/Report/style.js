import { StyleSheet } from 'react-native';

import { metrics, colors, fonts } from 'sportunity/src/theme';

export default StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
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
    marginRight: metrics.doubleBaseMargin,
    height: fonts.size.medium,
  },
  container: {
    flexDirection: 'row',
    marginHorizontal: 5,
    padding: metrics.baseMargin,
    backgroundColor: colors.snow,
    borderWidth: 1,
    borderColor: colors.steel,
    borderRadius: metrics.buttonRadius
  },
  textAreaContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 90,
    maxHeight: 90,
    backgroundColor: 'transparent',
    marginBottom: metrics.doubleBaseMargin,
    marginHorizontal: metrics.doubleBaseMargin
  },
  textAreaInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: colors.skyBlue,
    height: 90,
    maxHeight: 90,
    fontSize: fonts.size.small
  },
  textAreaIcon: {
    position: 'absolute',
    right: 10,
    height: 15,
    width: 15,
    bottom: 10
  },
  closeIcon: {
    marginTop: 5
  },
  footer: {
    marginHorizontal: 5,
    marginBottom: 5,
    padding: fonts.size.small,
    backgroundColor: colors.snow,
    borderWidth: 1,
    borderColor: colors.steel,
    borderRadius: metrics.buttonRadius
  }
});
