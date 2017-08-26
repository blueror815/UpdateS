import * as types from './actionNames';
/**
 *  MODALS
 */
/**
 * Action for opening/closing date modal
 */
export const updateDateModal = (value) => ({
  type: types.IS_DATE_MODAL_VISIBLE,
  value
});
/**
 * Action for opening/closing level modal
 */
export const updateLevelModal = (value) => ({
  type: types.IS_LEVEL_MODAL_VISIBLE,
  value
});
/**
 * Action for opening/closing price modal
 */
export const updatePriceModal = (value) => ({
  type: types.IS_PRICE_MODAL_VISIBLE,
  value
});
/**
 * Action for opening/closing sport modal
 */
export const updateSportModal = (value) => ({
  type: types.IS_SPORT_MODAL_VISIBLE,
  value
});
/**
 * Action for opening/closing place modal
 */
export const updatePlaceModal = (value) => ({
  type: types.IS_PLACE_MODAL_VISIBLE,
  value
});
/**
 * Action for opening/closing number modal
 */
export const updateNumberModal = (value) => ({
  type: types.IS_NUMBER_MODAL_VISIBLE,
  value
});
/**
 *  TITLE & DESCRIPTION
 */
/**
 * Action for adding title
 */
export const updateTitle = (text) => ({
  type: types.UPDATE_ACTIVITY_TITLE,
  text
});
/**
 * Action for adding description
 */
export const updateDescription = (text) => ({
  type: types.UPDATE_ACTIVITY_DESCRIPTION,
  text
});
/**
 *  SPORTS
 */
/**
* Action for updating searchSporttext
*/
export const updateSearchSportText = (text) => ({
  type: types.UPDATE_SEARCH_SPORT_TEXT,
  text
});
/**
 * Action for adding sport
 */
export const updateSport = (sportItem) => ({
  type: types.UPDATE_ACTIVITY_SPORT,
  sportItem
});
/**
 *  LEVELS
 */
/**
 * Action for updating all levels
 */
export const setAllLevels = () => ({
  type: types.UPDATE_ALL_LEVELS
});
/**
 * Action for updating beginner level
 */
export const setBeginnerLevel = () => ({
  type: types.UPDATE_BEGINNER_LEVEL
});
/**
* Action for updating Intermediate level
 */
export const setIntermediateLevel = () => ({
  type: types.UPDATE_INTERMEDIATE_LEVEL
});
/**
* Action for updating advanced level
 */
export const setAdvancedLevel = () => ({
  type: types.UPDATE_ADVANCED_LEVEL
});
/**
* Action for updating pro level
 */
export const setProLevel = () => ({
  type: types.UPDATE_PRO_LEVEL
});
/**
* Action for updating on/off range
 */
export const updateLevelRange = (value) => ({
  type: types.UPDATE_LEVEL_RANGE,
  value
});
/**
* Action for updating min slider value
 */
export const updateLevelMinSlider = (value) => ({
  type: types.UPDATE_LEVEL_MIN_SLIDER,
  value
});
/**
* Action for updating max slider value
*/
export const updateLevelMaxSlider = (value) => ({
  type: types.UPDATE_LEVEL_MAX_SLIDER,
  value
});
/**
* Action for updating Level if from/to is choosen...
*/
export const updateMultipleLevels = (finalLevelValues) => ({
  type: types.UPDATE_MULTIPLE_LEVELS,
  finalLevelValues
});
/**
* Action creator for calculating final level values if from/to is choosen...
*/
export const calculateMultipleLevels = (minValue, maxValue, isLevelSwitchOn) => (
  (dispatch) => {
    let finalLevelValues;
    if (isLevelSwitchOn && minValue === 1 && maxValue === 2) {
      finalLevelValues = ['Beginner', 'Intermediate'];
    } else if (isLevelSwitchOn && minValue === 1 && maxValue === 3) {
      finalLevelValues = ['Beginner', 'Intermediate', 'Advanced'];
    } else if (isLevelSwitchOn && minValue === 1 && maxValue === 4) {
      finalLevelValues = ['Beginner', 'Intermediate', 'Advanced', 'Pro'];
    } else if (isLevelSwitchOn && minValue === 2 && maxValue === 3) {
      finalLevelValues = ['Intermediate', 'Advanced'];
    } else if (isLevelSwitchOn && minValue === 2 && maxValue === 4) {
      finalLevelValues = ['Intermediate', 'Advanced', 'Pro'];
    } else if (isLevelSwitchOn && minValue === 3 && maxValue === 4) {
      finalLevelValues = ['Advanced', 'Pro'];
    }
    dispatch(updateMultipleLevels(finalLevelValues));
  }
);
/**
 *  DATE
 */
/**
 * Action for updating starting date
 */
export const updateNewActivityDate = (finalDate, dateForServer) => ({
  type: types.UPDATE_NEW_ACTIVITY_DATE,
  finalDate,
  dateForServer
});
/**
 * Action for updating ending date
 */
export const updateNewActivityEndDate = (finalDate, dateForServer) => ({
  type: types.UPDATE_NEW_ACTIVITY_END_DATE,
  finalDate,
  dateForServer
});
/**
 * Action for updating from hour
 */
export const updateFromHour = (value) => ({
  type: types.UPDATE_FROM_HOUR,
  value
});
/**
 * Action for updating from minute
 */
export const updateFromMinute = (value) => ({
  type: types.UPDATE_FROM_MINUTE,
  value
});
/**
 * Action for updating to hour
 */
export const updateToHour = (value) => ({
  type: types.UPDATE_TO_HOUR,
  value
});
/**
 * Action for updating to minute
 */
export const updateToMinute = (value) => ({
  type: types.UPDATE_TO_MINUTE,
  value
});
/**
 * Action for updating repeat switch
 */
export const updateRepeatSwitch = (value) => ({
  type: types.UPDATE_REPEAT_SWITCH,
  value
});
/**
 * Action for updating repeat value
 */
export const updateRepeatValue = (value) => ({
  type: types.UPDATE_REPEAT_VALUE,
  value
});
/**
 *  PLACES
 */
/**
* Action for updating searchSporttext
*/
export const updateSearchPlaceText = (text) => ({
  type: types.UPDATE_SEARCH_PLACE_TEXT,
  text
});
/**
 * Action for adding place
 */
export const updatePlace = (placeItem) => ({
  type: types.UPDATE_ACTIVITY_PLACE,
  placeItem
});
/**
 * Action for adding address
 */
export const updateAddress = (text) => ({
  type: types.UPDATE_ACTIVITY_ADDRESS,
  text
});
/**
 *  NUMBER
 */
/**
 * Action for adding minimum nuber
 */
export const updateMinimumNumber = (value, venueCost, perParticipant) => ({
  type: types.UPDATE_MINIMUM_NUMBER,
  value,
  venueCost,
  perParticipant
});
/**
 * Action for adding maximum number
 */
export const updateMaximumNumber = (value, venueCost, perParticipant) => ({
  type: types.UPDATE_MAXIMUM_NUMBER,
  value,
  venueCost,
  perParticipant
});
/**
 * Action for adding exactly number
 */
export const updateExactlyNumber = (value, venueCost, perParticipant) => ({
  type: types.UPDATE_EXACTLY_NUMBER,
  value,
  venueCost,
  perParticipant
});
/**
 * Action for updating exactly switch
 */
export const updateExactlySwitch = (value) => ({
  type: types.UPDATE_EXACTLY_SWITCH,
  value
});
/**
 *  PRICE
 */
/**
 * Action for updating free switch
 */
export const updateFreeSwitch = (value) => ({
  type: types.UPDATE_FREE_SWITCH,
  value
});
/**
 * Action for updating venue cost
 */
export const updateVenueCost = (value, perParticipant, min, max) => ({
  type: types.UPDATE_VENUE_COST,
  value,
  perParticipant,
  min,
  max
});
/**
 * Action for updating price per participant
 */
export const updatePricePerParticipant = (value, venueCost, min, max) => ({
  type: types.UPDATE_PRICE_PER_PARTICIPANT,
  value,
  venueCost,
  min,
  max
});
/**
 *  PRIVATE
 */
/**
 * Action for updating private/public
 */
export const updatePrivateActivity = (value) => ({
  type: types.UPDATE_PRIVATE_ACTIVITY,
  value
});
/**
 * Action for activity indicator and validate button
 */
export const changeLoadingStatus = (value) => ({
  type: types.CHANGE_LOADING_STATUS,
  value
});

/**
 * Action for activity indicator and validate button
 */
export const showErrors = (value) => ({
  type: types.SHOW_NEW_ACTIVITY_ERRORS,
  value
});

/**
 * Action for reseting fields
 */
export const resetAllFields = () => ({
  type: types.RESET_NEW_ACTIVITY_FIELDS
});
