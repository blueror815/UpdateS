import { StyleSheet } from 'react-native';

import { metrics, colors, fonts } from 'sportunity/src/theme';

export default StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
  averageText: {
    marginLeft: metrics.baseMargin,
    color: colors.skyBlue,
    fontSize: fonts.size.medium,
    marginRight: 5
  },
  headerIcon: {
    alignSelf: 'flex-end',
    marginRight: metrics.doubleBaseMargin,
    height: fonts.size.medium,
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
    alignItems: 'center',
    paddingLeft: metrics.baseMargin
  },
  photoContainer: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: colors.lightGreen,
    backgroundColor: colors.snow,
    marginRight: metrics.doubleBaseMargin
  },
  itemInfoContainer: {
    flex: 1
  },
  itemTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1
  },
  itemTitleText: {
    fontSize: fonts.size.small,
    color: colors.skyBlue,
    fontWeight: 'bold'
  },
  itemStarsIcon: {
    height: fonts.size.medium
  },
  itemSubitleText: {
    fontSize: fonts.size.small,
    color: colors.skyBlue,
    marginTop: 5,
    marginBottom: 5
  },
  itemParagraphText: {
    fontSize: fonts.size.tiny,
    flexWrap: 'wrap'
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
