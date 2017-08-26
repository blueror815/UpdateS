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
    flex: 1,
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
    margin: 3,
    color: colors.skyBlue
  },
  sportItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.steel,
    paddingHorizontal: 10,
  },
  sportText: {
    flex: 1,
    maxHeight: 30,
    fontSize: fonts.size.medium,
    margin: 8,
    color: colors.skyBlue
  },
  addText: {
    textAlign: 'center',
    marginVertical: 5,
    borderColor: colors.steel,

  },
  image: {
    height: 20,
    width: 30,
    marginRight: metrics.doubleBaseMargin
  },
  icon: {
    height: 15
  }
});
