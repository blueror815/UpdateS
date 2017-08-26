import { StyleSheet } from 'react-native';

import { metrics, colors, fonts } from 'sportunity/src/theme';

const style = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: metrics.baseMargin,
    justifyContent: 'flex-start'
  },
  text: {
    color: colors.skyBlue,
    fontSize: fonts.size.regular,
    fontWeight: '500',
    marginHorizontal: metrics.doubleBaseMargin
  },
  repeatValuesContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    backgroundColor: colors.skyBlue,
    color: colors.snow,
    padding: 3,
    width: 40,
    height: 40,
    borderColor: colors.skyBlue,
    borderWidth: 1,
    textAlign: 'center'
  },
});


export default style;
