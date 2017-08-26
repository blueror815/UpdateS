import { StyleSheet } from 'react-native';
import { metrics, fonts, colors } from 'sportunity/src/theme';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: metrics.doubleBaseMargin,
    paddingTop: metrics.baseMargin,
    flex: 1
  },
  text: {
    fontSize: fonts.size.regular,
    // color: colors.skyBlue,
    fontWeight: '500'
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  exactlySwitch: {
    marginLeft: metrics.doubleBaseMargin
  },
  input: {
    backgroundColor: colors.skyBlue,
    color: colors.snow,
    padding: 3,
    width: 80,
    height: 40,
    borderColor: colors.skyBlue,
    borderWidth: 1,
    textAlign: 'center'
  },
});

export default style;
