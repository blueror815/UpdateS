import { StyleSheet } from 'react-native';

import { metrics, colors, fonts } from 'sportunity/src/theme';

export default StyleSheet.create({
  container: {
    marginTop: 5,
    marginHorizontal: 5,
    padding: metrics.baseMargin,
    backgroundColor: colors.snow,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.steel,
    borderRadius: metrics.buttonRadius
  },
  text: {
    flex: 1,
    color: colors.darkGrey,
    fontSize: fonts.size.small
  },
  capitalWord: {
    flex: -1,
    fontSize: fonts.size.regular,
    color: colors.skyBlue,
    fontWeight: 'bold',
    paddingRight: metrics.baseMargin
  }
});
