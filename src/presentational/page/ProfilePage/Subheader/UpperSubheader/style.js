import { StyleSheet } from 'react-native';

import { colors, fonts, metrics } from 'sportunity/src/theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  icon: {
    height: metrics.icons.tiny,
    width: metrics.icons.tiny
  },
  photoContainer: {
    margin: metrics.baseMargin,
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: colors.skyBlue,
    backgroundColor: colors.snow
  },
  text: {
    marginTop: 4,
    fontSize: fonts.size.small,
    color: colors.skyBlue
  }
});
