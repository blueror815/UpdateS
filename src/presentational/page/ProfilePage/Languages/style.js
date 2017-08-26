import { StyleSheet } from 'react-native';

import { metrics, colors, fonts } from 'sportunity/src/theme';

export default StyleSheet.create({
  container: {
    margin: 5,
    padding: metrics.baseMargin,
    backgroundColor: colors.snow,
    borderWidth: 1,
    borderColor: colors.steel,
    borderRadius: metrics.buttonRadius
  },
  levelContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  text: {
    fontSize: fonts.regular,
    color: colors.skyBlue,
    flex: -1,
    marginHorizontal: metrics.baseMargin,
    marginVertical: 5
  }
});
