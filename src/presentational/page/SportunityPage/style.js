import { StyleSheet } from 'react-native';

import { colors, metrics } from 'sportunity/src/theme';

export default StyleSheet.create({
  upperHalfPage: {
    flex: 1
  },
  sportunityPageView: {
    flex: 1,
    backgroundColor: colors.background
  },
  tabView: {
    marginTop: metrics.navBarHeight
  }
});

export const scrollableTabSpecificStyles = {
  tabBarActiveTextColor: colors.bloodOrange
};
