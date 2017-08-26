/**
 * Created by fxpage on 8/18/16.
 */
import {
   metrics,
   colors,
   fonts
} from 'sportunity/src/theme';

export const styles = {
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  scrollView: {
    height: 500,
    marginTop: metrics.navBarHeight
  },
  hbContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  hblIcon: {
    width: 15,
    height: 15
  },
  seperator: {
    width: 10
  },
  hblTxt: {
    color: colors.lightGreen
  },
  rowContainer: {
    flexDirection: 'column',
    margin: 5,
    padding: 10,
    backgroundColor: colors.white,
    borderRadius: 2,
  },
  title: [fonts.style.normal, {
    color: colors.darkBlue,
    paddingRight: 10,
    flex: 1,
  }],
  participant: [fonts.style.normal, {
    color: colors.blue,
    paddingRight: 10

  }],
  numberParticipant: [fonts.style.normal, {
    color: colors.blue,
    paddingRight: 10
  }],
  price: [fonts.style.normal, {
    color: colors.darkBlue
  }],
  right_column: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  icon: {
    resizeMode: 'contain', 
    width: 20, 
    height: 20, 
    justifyContent: 'flex-end',
    tintColor: colors.lightGrey,
    marginTop: 2
  },
  descContainer:{
    paddingLeft: 5,
    flex: 5,
  },
  desc: [fonts.style.small, {
    color: colors.lightGrey,
    textAlign: 'justify',
    flex: 1
  }],
  rowPolicy:{
    marginTop: 10,
    flex: 1,
    flexDirection: 'row'
  },
  policy: [fonts.style.small, {
    color: colors.darkBlue
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
  dateDesc: [fonts.style.normal, {
    color: colors.blue,
  }],
  rowMargin:{
    flexDirection: 'row', 
    margin: 20
  }
};
