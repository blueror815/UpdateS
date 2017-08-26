/**
 * Created by BaeBae on 8/11/16.
 */
import { colors, fonts } from '../../../../../../../src/theme';

export const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    borderTopColor: '#ddd',
    borderTopWidth: 2
  },
  column: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  right_column: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  icon: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
    resizeMode: 'contain',
  },
  user_icon: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
    resizeMode: 'contain'
  },
  right_icon: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
    resizeMode: 'contain',
    tintColor: colors.blue,
  },
  info: [fonts.style.small],
  count: [fonts.style.small, { color: colors.charcoal }]
};
