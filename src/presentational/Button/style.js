
import { StyleSheet } from 'react-native';

import {
  colors,
  fonts,
  metrics,
} from 'sportunity/src/theme';

// TODO: it needs to add shadow, it could be done with
// some properties (IOs and Android behave differently),
// aprox with 2 circles, one above each other, slightly
// moved; or installing a 3º party library.

const style = StyleSheet.create({
  circular: {
    height: metrics.icons.xl,
    width: metrics.icons.xl,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: metrics.icons.xl
  },
  addition: {
    backgroundColor: colors.bloodOrange
  },
  charSymbol: {
    color: colors.silver,
    fontSize: fonts.style.h2.fontSize,
    fontFamily: fonts.style.h2.fontFamily,
    fontWeight: 'bold'
  }
});

export default {
  style,
  underlayColor: colors.silver,
};
