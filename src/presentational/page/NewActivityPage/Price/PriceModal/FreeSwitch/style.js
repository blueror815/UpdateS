import { StyleSheet } from 'react-native';
import { metrics, fonts, colors } from 'sportunity/src/theme';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: metrics.doubleBaseMargin,
    paddingTop: metrics.baseMargin,
  },
  text: {
    fontSize: fonts.size.regular,
    fontWeight: '500',
    color: colors.skyBlue
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  exactlySwitch: {
    marginLeft: metrics.doubleBaseMargin
  }
});

export default style;
