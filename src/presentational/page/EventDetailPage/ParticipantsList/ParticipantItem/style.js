import { StyleSheet } from 'react-native';

import { metrics, colors, fonts } from '../../../../../../src/theme';

const styles = {
  container: {
    marginTop: 1,
    marginHorizontal: metrics.smallMargin,
    padding: metrics.baseMargin,
    backgroundColor: colors.snow,
    borderWidth: 1,
    borderColor: colors.steel,
    borderRadius: metrics.buttonRadius
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: metrics.baseMargin,
    flex: 1
  },
  photoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  thumbProfile: {
    borderColor: colors.darkGreen,
    borderWidth: 3,
    width: metrics.images.medium,
    height: metrics.images.medium,
    borderRadius: metrics.images.mediumRadius,
    resizeMode: 'contain'
  },
  colContainer:{
    flex: 2
  },
  iconContainer:{
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconDarkBlue:{
    tintColor: colors.darkBlue
  },
  iconBlue:{
    tintColor: colors.blue
  },
  iconLightGrey:{
    tintColor: colors.lightGrey
  },
  iconLocation: {
    width: metrics.icons.tiny,
    height: metrics.icons.tiny,
    resizeMode: 'contain',
    marginRight: metrics.smallMargin,
    marginLeft: metrics.baseMargin
  },
  name: [fonts.style.normal, {
    color: colors.blue
  }],
};

export default styles;