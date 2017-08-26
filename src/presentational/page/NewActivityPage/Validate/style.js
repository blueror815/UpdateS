import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'sportunity/src/theme';

const style = StyleSheet.create({
  button: {
    backgroundColor: colors.skyBlue,
    padding: metrics.baseMargin,
    marginTop: metrics.doubleBaseMargin,
    marginHorizontal: metrics.doubleBaseMargin,
    marginBottom: 60,
    borderRadius: 50
  },
  text: {
    fontSize: fonts.size.h3,
    color: colors.snow,
    textAlign: 'center'
  }
});

export default style;
