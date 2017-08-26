/**
 * Created by fxpage on 8/18/16.
 */
import {
  colors,
  fonts } from '../../../../../src/theme';

export const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 5,
    backgroundColor: colors.white,
    borderRadius: 2,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowBottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  imageContainer: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  detailContainer: {
    flex: 1,
    padding: 10,
    marginLeft: 15,
    flexDirection: 'column'
  },
  thumb: {
    width: 80,
    height: 80,
    flex: 1,
    resizeMode: 'contain'
  },
  thumbProfile: {
    borderColor: colors.darkGreen,
    borderWidth: 3,
    width: 60,
    height: 60,
    borderRadius: 30,
    resizeMode: 'contain'
  },
  title: [fonts.style.normal, {
    color: colors.charcoal,
    flex: 1,
  }],
  level: [fonts.style.small, {
    color: colors.blue,
    flex: 1,
  }],
  location: [fonts.style.small, {
    color: colors.charcoal,
  }],
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
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginRight: 5
  },
  w_seperator: {
    width: 30
  }
};
