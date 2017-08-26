import { StyleSheet } from 'react-native';

import {
  metrics,
  colors,
  fonts
} from 'sportunity/src/theme';

export default StyleSheet.create({
  listContainer: {
    marginTop: metrics.baseMargin,
    marginBottom: metrics.doubleBaseMargin,
    borderWidth: 1,
    borderColor: colors.steel,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.steel,
    paddingHorizontal: 20
  },
  headerText: {
    fontSize: fonts.size.medium,
    margin: 3,
    color: colors.skyBlue
  },
  languageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.steel,
    paddingLeft: 70,
    padding: 5,
  },
  languageText: {
    fontSize: fonts.size.medium,
    color: colors.skyBlue
  },
  addText: {
    textAlign: 'center',
    margin: 8
  },
  icon: {
    height: 15
  }
});
