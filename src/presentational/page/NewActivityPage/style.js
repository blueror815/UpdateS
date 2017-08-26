import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'sportunity/src/theme';

const style = StyleSheet.create({
  container: {
    padding: metrics.baseMargin,
    marginTop: metrics.navBarHeight,
    justifyContent: 'center',
    backgroundColor: colors.silver
  },
  errorText: {
    marginLeft: metrics.baseMargin,
    marginTop: metrics.baseMargin,
    fontSize: fonts.size.medium,
    color: colors.error
  }
});

export default style;
