import { combineReducers } from 'redux';
import sportunityList from './sportunityList';
import sportunityAuth from './sportunityAuth';
import sportunityCreateProfile from './sportunityCreateProfile';
import sportunityProfile from './sportunityProfile';
import filtersState from './filtersState';
import sportunitySport from './sportunitySport';
import sportunityNewActivity from './sportunityNewActivity';
import sportunityActivity from './sportunityActivity';
import sportunityChat from './sportunityChat';
import sportunityDrawer from './sportunityDrawer';


export default combineReducers({
  sportunityList,
  sportunityAuth,
  sportunityCreateProfile,
  sportunityProfile,
  sportunitySport,
  filtersState,
  sportunityNewActivity,
  sportunityActivity,
  sportunityChat,
  sportunityDrawer
});
