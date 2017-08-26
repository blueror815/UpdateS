import { StyleSheet } from 'react-native';
import { metrics, fonts, colors } from 'sportunity/src/theme';
import Dimensions from 'Dimensions';

const { width } = Dimensions.get('window');

const style = StyleSheet.create({
  container: {
    paddingTop: metrics.baseMargin,
  },
  valuesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width / 1,
    paddingHorizontal: metrics.doubleBaseMargin,
    marginVertical: metrics.baseMargin
  },
  keyText: {
    fontSize: fonts.size.regular,
    fontWeight: '500',
  },
  valueText: {
    fontSize: fonts.size.regular,
    color: colors.skyBlue,
    fontWeight: '500'
  },
  revenueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width / 1,
    paddingRight: metrics.doubleBaseMargin,
    paddingLeft: 60,
    marginVertical: metrics.baseMargin,
  },
  organizerText: {
    fontSize: fonts.size.regular,
    color: colors.skyBlue,
    fontWeight: '500',
    marginVertical: metrics.doubleBaseMargin
  },
  revenueKeyText: {
    fontSize: 16,
    fontWeight: '500',
  },
  revenueValueText: {
    fontSize: fonts.size.regular,
    color: colors.skyBlue,
    fontWeight: '500',
    marginRight: metrics.doubleBaseMargin
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
