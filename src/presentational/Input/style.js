import { StyleSheet } from 'react-native';

import {
  fonts,
  colors,
  metrics,
} from 'sportunity/src/theme';


const inputStyles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
    maxHeight: 40,
    minHeight: 40,
    backgroundColor: 'transparent',
    marginBottom: metrics.doubleBaseMargin,
    borderBottomWidth: 2,
    borderBottomColor: colors.skyBlue,
    marginHorizontal: 40,
  },
  input: {
    flex: 1,
    fontSize: fonts.size.medium,
    height: 42,
    maxHeight: 42
  },
  icon: {
    position: 'absolute',
    right: metrics.baseMargin,
    height: 15,
    width: 15,
    marginTop: 5
  }
});

export default inputStyles;
