import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../theme';


export default StyleSheet.create({
  viewContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginTop: metrics.navBarHeight,
    backgroundColor: colors.whiteSmoke,
    padding: 4,
  },
});
