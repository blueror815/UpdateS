import { StyleSheet } from 'react-native';
import { fonts, colors, metrics } from 'sportunity/src/theme';

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: 'transparent',
    marginHorizontal: metrics.baseMargin,
    height: 80
  },
  input: {
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: colors.skyBlue,
    fontSize: fonts.size.medium,
    height: 40,
    maxHeight: 40
  },
  textareaContainer: {
    backgroundColor: 'transparent',
    marginHorizontal: metrics.baseMargin,
    height: 120
  },
  textarea: {
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: colors.skyBlue,
    fontSize: fonts.size.medium,
    height: 80,
    maxHeight: 80
  },
  text: {
    color: colors.darkBlue,
    fontWeight: '500',
    marginTop: metrics.baseMargin
  }
});

export default styles;
