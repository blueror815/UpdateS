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
  buttonStyle: {
    marginRight: 10
  },


  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.whiteSmoke,
    marginTop: 64
  },
  applyView: {
    margin: 7,
  },
  filtersView: {
    margin: 5
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15
  },
  applyViewCell: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.grey87,
    borderWidth: 1,
    borderRadius: 2,
    backgroundColor: 'white'
  },
  applySavedCellContext: {
    flex: 1,
    flexDirection: 'row',
    marginRight: 30,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45
  },
  applyViewCellContext: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45
  },
  clearAllCell: {
    flex: 1,
    paddingLeft: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: colors.grey87,
    backgroundColor: 'white'
  },
  filterViewCell: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.grey87,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 2,
    backgroundColor: 'white'
  },
  filterViewCellContext: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 40,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60
  },
  clearLeft: {
    flex: 5,
    alignItems: 'flex-start'
  },
  clearRight: {
    flex: 5,
    alignItems: 'flex-end',
    marginRight: 30
  },
  clearCellCaption: {
    textAlign: 'left',
    fontSize: 16,
    color: colors.darkSlateGray,
  },
  applySavedCellCaption: {
    flex: 5,
    textAlign: 'left',
    fontSize: 20,
    color: colors.darkSlateGray,
  },
  multiSlider: {
    flex: 5,
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  hoursMinValue: {
    flex: 6,
    alignItems: 'flex-start'
  },
  hoursMaxValue: {
    flex: 5,
    alignItems: 'flex-end'
  },
  hoursCloseValue: {
    flex: 1,
    alignItems: 'flex-end'
  },
  priceMinValue: {
    flex: 5,
    alignItems: 'flex-start'
  },
  priceMaxValue: {
    flex: 5,
    alignItems: 'flex-end'
  },
  datesToView: {
    flex: 5,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: colors.grey87,
    justifyContent: 'center',
    alignItems: 'center'
  },
  datePicker: {
    height: 250,
    borderWidth: 1,
    borderRadius: 2,
    padding: 10,
    borderColor: colors.grey87,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  applyCellCaption: {
    flex: 5,
    textAlign: 'left',
    fontSize: 20,
    color: colors.darkOrange,
  },
  filterCellCaption: {
    flex: 5,
    textAlign: 'left',
    fontSize: 20,
    color: colors.darkSlateGray,
  },
  applyButton: {
    margin: 5,
    height: 35,
    width: 110,
    borderTopLeftRadius: 17,
    borderBottomLeftRadius: 17,
    borderTopRightRadius: 17,
    borderBottomRightRadius: 17,
    backgroundColor: colors.lightSeaGreen,
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyButtonCaption: {
    color: 'white'
  },
  resetButton: {
    margin: 5
  },
  leftContext: {
    flex: 1,
    flexDirection: 'row',
    shadowColor: colors.darkIvory,
    shadowOffset: {
      width: 13,
      height: 13
    },
    shadowRadius: 2,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  rightContext: {
    flex: 1,
    flexDirection: 'row',
    shadowColor: colors.darkIvory,
    shadowOffset: {
      width: 13,
      height: 13
    },
    shadowRadius: 2,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
});
