/**
 * Created by BaeBae on 8/11/16.
 */
import { colors, fonts } from '../../../../../../../src/theme';

// TODO: use measure from Theme.
export const styles = {
  container: {
    flex: 4,
    flexDirection: 'column',
    padding: 10,
    backgroundColor: colors.white,
  },
  status: [{ color: colors.bloodOrange }],
  datetime: [fonts.style.small],
  datetimeContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 5,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  row2:{
    flex: 2
  },
  imageContainer: {
    height: 60,
    width: 60,
    borderRadius: 70,
    borderColor: colors.blue,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  detailContainer: {
    flex: 8,
    marginLeft: 15,
    flexDirection: 'column'
  },
  priceContainer: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: colors.blue,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    tintColor: colors.blue
  },
  title: [fonts.style.normal, {
    color: colors.charcoal,
    flex: 1,
  }],
  level: [fonts.style.small, {
    color: colors.blue,
    marginRight: 2
  }],
  to: [fonts.style.small, {
    color: colors.blue,
    marginRight: 2
  }],
  price: [fonts.style.tiny, {
    color: colors.blue,
  }],
  location: [fonts.style.small, {
    color: colors.charcoal,
    flex: 1,
  }],
  iconLocation: {
    width: 10,
    height: 20,
    resizeMode: 'contain',
    tintColor: colors.blue,
    marginRight: 5
  },
  ellipseContainer: {
    position: 'absolute',
    right: 0,
    width: 8,
    top: 0,
    bottom: 0,
    justifyContent: 'center'
  },
  ellipseBar: {
    width: 6,
    height: 18,
    resizeMode: 'contain'
  }
};
