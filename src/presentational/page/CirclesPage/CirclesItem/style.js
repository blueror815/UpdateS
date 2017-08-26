import { colors, metrics, fonts } from '../../../../theme';

export const styles = {
  markerOverlayContainer: {
    flexDirection: 'row',
    flex: 1,
    left: 0,
    right: 0,
    paddingHorizontal: metrics.baseMargin,
    paddingTop: metrics.smallMargin
  },
  container:{
    flex: 1,
  },
  content: {
    height: 100,
    flex: 1,
    flexDirection: 'row',
    borderWidth: metrics.borderWidthRow,
    borderRadius: metrics.borderRowRadius,
    borderColor: colors.lightGrey,
    padding: metrics.baseMargin,
    backgroundColor: colors.white,
    
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: metrics.baseMargin,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: metrics.images.large,
    height: metrics.images.large,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
  members:[fonts.style.normal, {
    color: colors.charcoal,
    marginLeft: metrics.baseMargin
  }],
  titleContainer: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: [fonts.style.normal, {
    color: colors.blue
  }],
  leftContainer: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  closeContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  close: [fonts.style.h1, {
    color: colors.blue
  }],
  ellipseContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  ellipseBar: {
    width: 6,
    height: 18,
    resizeMode: 'contain'
  }
};
