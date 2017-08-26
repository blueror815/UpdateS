import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../../../theme';

export default StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 0,
    backgroundColor: colors.snow,
  },
  itemCaption: {
    fontSize: fonts.size.small,
    color: colors.darkGreen,
  },
  itemImage: {
    height: 15,
    width: 15
  },
});
