import { StyleSheet } from 'react-native';
import { colors } from '../../../../theme';

export default StyleSheet.create({
  placeContextView: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: colors.lightGrey,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    backgroundColor: 'white'
  },
  placeContextClose: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  discloser: {
    height: 15,
    width: 15
  },
  locationContext: {
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 1,
    marginLeft: 15,
    marginRight: 20,
    borderTopColor: 'white',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderBottomColor: colors.darkSlateGray
  },
  aroundContext: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  aroundBtn: {
    width: 40,
    height: 40,
    borderColor: colors.lightGrey,
    borderWidth: 1,
    borderRadius: 5,
    borderTopColor: colors.silver,
    borderLeftColor: colors.lightIvory,
    borderRightColor: colors.lightIvory,
    justifyContent: 'center',
    alignItems: 'center'
  },
  plusMinusBtn: {
    color: colors.lightSeaGreen
  },
  aroundLabel: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  aroundLabelText: {
    fontSize: 16,
    color: colors.darkSlateGray
  },
  aroundValueText: {
    fontSize: 24,
    color: colors.darkOrange
  },
  aroundValue: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  aroundUnit: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchInput: {
    height: 60,
    backgroundColor: '#ffffff',
  }
});
