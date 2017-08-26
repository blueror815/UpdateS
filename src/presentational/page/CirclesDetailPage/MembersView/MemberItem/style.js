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
    borderRadius: metrics.buttonRadius,
    height: 50
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
    flex: 5
  },
  name: [fonts.style.normal, {
    color: colors.blue
  }],
  remove: [fonts.style.h3, {
    color: colors.blue
  }]
};

export default styles;