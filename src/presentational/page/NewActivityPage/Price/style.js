import { StyleSheet } from 'react-native';
import { metrics, colors } from 'sportunity/src/theme';

const style = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: metrics.borderRadius,
    padding: metrics.baseMargin,
    marginTop: metrics.baseMargin,
    backgroundColor: colors.snow,
    flexDirection: 'row',
    alignItems: 'center'
  },
  subContainer: {
    flex: 1
  },
  text: {
    color: colors.darkBlue,
    marginBottom: metrics.baseMargin,
    fontWeight: '500'
  },
  select: {
    color: colors.skyBlue,
    fontWeight: '500'
  }
});

export default style;
