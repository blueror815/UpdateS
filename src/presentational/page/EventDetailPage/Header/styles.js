/**
 * Created by Mohamed Anouar KOTTI 
 * kottianouar@gmail.com
 */
import {
   metrics,
   colors,
   fonts
} from 'sportunity/src/theme';

export const styles = {
  header: {
    backgroundColor: colors.blue,
    paddingTop: 20,
    marginBottom: 5,
    shadowColor: colors.black,
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1
    }
  },
  headerTop: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 40,
    marginRight: 40,
    justifyContent: 'space-between'
  },
  headerBottom: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 8,
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerTxtDesc: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTxtDescTop: {
    color: colors.black,
    fontSize: 14
  },
  headerTxtDescBottom: {
    color: colors.black,
    fontSize: 18
  },
  headerImage: {
    width: 70,
    height: 70,
    tintColor: colors.black
  },
  levelContainer: {
    flex: 1, 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  column :{
    flex: 1, 
    flexDirection: 'column',
  }
}