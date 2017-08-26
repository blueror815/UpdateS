import { StyleSheet } from 'react-native';

import { metrics, colors, fonts } from 'sportunity/src/theme';

const style = StyleSheet.create({
  button: {
    backgroundColor: colors.skyBlue,
    padding: metrics.baseMargin,
    marginTop: metrics.doubleBaseMargin,
    marginBottom: metrics.doubleBaseMargin,
    marginHorizontal: metrics.doubleBaseMargin,
    borderRadius: 50
  },
  text: {
    fontSize: fonts.size.regular,
    color: colors.snow,
    textAlign: 'center'
  }
});


export default style;
