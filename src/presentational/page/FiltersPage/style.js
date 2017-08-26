import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../../theme';

export default StyleSheet.create({
  headerViewStyle: {
    height: 25,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderColor: colors.lightGrey,
    borderWidth: 1,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },
  headerCaptionStyle: {
    fontSize: fonts.size.small,
    marginLeft: 10,
  },
  headerImageStyle: {
    marginRight: 20
  },
  savedFilterStyle: {
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    borderColor: colors.lightGrey,
    borderWidth: 1,
  },
  savedFilterCaptionStyle: {
    fontSize: fonts.size.small,
    color: colors.bloodOrange,
    marginLeft: 10,
  },
  savedFilterImageStyle: {
    marginRight: 5
  },
  footerViewStyle: {
    height: 25,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    borderColor: colors.lightGrey,
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10
  },
  footerCaptionStyle: {
    fontSize: fonts.size.small,
    marginLeft: 10,
  },
  filterStyle: {
    height: 60,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 2,
    borderColor: colors.lightGrey,
    borderWidth: 1,
    borderRadius: 4,
  },
  filterCaptionStyle: {
    fontSize: fonts.size.regular,
    marginLeft: 20,
  },
  filterImageStyle: {
    marginRight: 15
  },
  buttonsContainer: {
    flex: 1,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15
  },
  buttonStyle: {
    marginRight: 10
  }
});
