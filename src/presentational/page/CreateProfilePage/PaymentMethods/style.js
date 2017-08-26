import {
  StyleSheet
} from 'react-native';

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
    borderColor: colors.steel
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
    padding: 3,
    color: colors.skyBlue
  },
  paymentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.steel,
    paddingHorizontal: 10,
    padding: 8
  },
  paymentText: {
    flex: 1,
    fontSize: fonts.size.medium,
    color: colors.skyBlue
  },
  addText: {
    textAlign: 'center',
    margin: 8
  },
  image: {
    marginRight: 70,
    height: 20,
    width: 70
  },
  icon: {
    height: 15
  }
});
