import * as types from '../../action/actionNames';

const defaultState = {
  // MODALS
  isDateModalVisible: false,
  isLevelModalVisible: false,
  isPriceModalVisible: false,
  isNumberModalVisible: false,
  isPlaceModalVisible: false,
  isSportModalVisible: false,
  // INPUTS
  activityTitle: '',
  activityDescription: '',
  // SPORT
  searchSportText: '',
  sportName: '',
  sportIcon: '',
  // LEVEL
  allLevels: [],
  allLevelsNumeric: [],
  allLevelsOption: false,
  beginnerLevelOption: false,
  intermediateLevelOption: false,
  advancedLevelOption: false,
  proLevelOption: false,
  isLevelSwitchOn: false,
  levelMinSliderValue: 1,
  levelMaxSliderValue: 4,
  // DATE
  newActivityDate: '',
  newActivityDateForServer: '',
  newActivityEndDate: '',
  newActivityEndDateForServer: '',
  fromHour: '0',
  toHour: '0',
  fromMinute: '00',
  toMinute: '00',
  isRepeatSwitchOn: false,
  repeatValue: '0',
  // PLACE
  searchPlaceText: '',
  placeName: '',
  placeIcon: '',
  // NUMBER
  minimumNumber: 0,
  maximumNumber: 0,
  exactlyNumber: 0,
  isExactlySwitchOn: false,
  // PRICE
  isFreeSwitchOn: true,
  venueCost: 0,
  pricePerParticipant: 0,
  minimumRevenue: 0,
  maximumRevenue: 0,
  // Private
  isActivityPrivate: false,
  // loading
  isNewActivityLoading: false,
  // errors
  areErrorsShown: false

};


/**
 * Reducer for handling New Activity actions
 */
export default (state = defaultState, action) => {
  switch (action.type) {
    /**
     *  MODALS
     */
    case types.IS_DATE_MODAL_VISIBLE:
      return {
        ...state,
        isDateModalVisible: action.value
      };
    case types.IS_LEVEL_MODAL_VISIBLE:
      return {
        ...state,
        isLevelModalVisible: action.value
      };
    case types.IS_PRICE_MODAL_VISIBLE:
      return {
        ...state,
        isPriceModalVisible: action.value
      };
    case types.IS_NUMBER_MODAL_VISIBLE:
      return {
        ...state,
        isNumberModalVisible: action.value
      };
    case types.IS_SPORT_MODAL_VISIBLE:
      return {
        ...state,
        isSportModalVisible: action.value
      };
    case types.IS_PLACE_MODAL_VISIBLE:
      return {
        ...state,
        isPlaceModalVisible: action.value
      };

    /**
     *  SPORT
     */

    case types.UPDATE_SEARCH_SPORT_TEXT:
      return {
        ...state,
        searchSportText: action.text
      };
    case types.UPDATE_ACTIVITY_SPORT:
      return {
        ...state,
        sportName: action.sportItem.node.id
      };

    /**
     *  TITLE & DESCRIPTION
     */

    case types.UPDATE_ACTIVITY_TITLE:
      return {
        ...state,
        activityTitle: action.text
      };
    case types.UPDATE_ACTIVITY_DESCRIPTION:
      return {
        ...state,
        activityDescription: action.text
      };

    /**
     *  LEVELS
     */

    case types.UPDATE_ALL_LEVELS:
      return {
        ...state,
        allLevelsOption: true,
        beginnerLevelOption: false,
        intermediateLevelOption: false,
        advancedLevelOption: false,
        proLevelOption: false,
        allLevels: ['Beginner', 'Intermediate', 'Advanced', 'Pro'],
        allLevelsNumeric: [1, 2, 3, 4, 5],
      };
    case types.UPDATE_BEGINNER_LEVEL:
      return {
        ...state,
        allLevelsOption: false,
        beginnerLevelOption: true,
        intermediateLevelOption: false,
        advancedLevelOption: false,
        proLevelOption: false,
        allLevels: ['Beginner'],
        allLevelsNumeric: [1]
      };
    case types.UPDATE_INTERMEDIATE_LEVEL:
      return {
        ...state,
        allLevelsOption: false,
        beginnerLevelOption: false,
        intermediateLevelOption: true,
        advancedLevelOption: false,
        proLevelOption: false,
        allLevels: ['Intermediate'],
        allLevelsNumeric: [2]
      };
    case types.UPDATE_ADVANCED_LEVEL:
      return {
        ...state,
        allLevelsOption: false,
        beginnerLevelOption: false,
        intermediateLevelOption: false,
        advancedLevelOption: true,
        proLevelOption: false,
        allLevels: ['Advanced'],
        allLevelsNumeric: [3]
      };
    case types.UPDATE_PRO_LEVEL:
      return {
        ...state,
        allLevelsOption: false,
        beginnerLevelOption: false,
        intermediateLevelOption: false,
        advancedLevelOption: false,
        proLevelOption: true,
        allLevels: ['Pro'],
        allLevelsNumeric: [4]
      };
    case types.UPDATE_LEVEL_RANGE:
      return {
        ...state,
        isLevelSwitchOn: action.value,
      };
    case types.UPDATE_LEVEL_MIN_SLIDER:
      return {
        ...state,
        levelMinSliderValue: action.value,
      };
    case types.UPDATE_LEVEL_MAX_SLIDER:
      return {
        ...state,
        levelMaxSliderValue: action.value
      };
    case types.UPDATE_MULTIPLE_LEVELS:
      return {
        ...state,
        allLevels: action.finalLevelValues
      };

    /**
     *  DATE
     */

    case types.UPDATE_NEW_ACTIVITY_DATE:
      return {
        ...state,
        newActivityDate: action.finalDate,
        newActivityDateForServer: action.dateForServer
      };
    case types.UPDATE_NEW_ACTIVITY_END_DATE:
      return {
        ...state,
        newActivityEndDate: action.finalDate,
        newActivityEndDateForServer: action.dateForServer
      };
    case types.UPDATE_FROM_HOUR:
      return {
        ...state,
        fromHour: action.value
      };
    case types.UPDATE_FROM_MINUTE:
      return {
        ...state,
        fromMinute: action.value
      };
    case types.UPDATE_TO_HOUR:
      return {
        ...state,
        toHour: action.value
      };
    case types.UPDATE_TO_MINUTE:
      return {
        ...state,
        toMinute: action.value
      };
    case types.UPDATE_REPEAT_VALUE:
      return {
        ...state,
        repeatValue: action.value
      };
    case types.UPDATE_REPEAT_SWITCH:
      return {
        ...state,
        isRepeatSwitchOn: action.value
      };

    /**
     *  PLACE
     */
    case types.UPDATE_SEARCH_PLACE_TEXT:
      return {
        ...state,
        searchPlaceText: action.text
      };
    case types.UPDATE_ACTIVITY_PLACE:
      return {
        ...state,
        placeName: action.placeItem.node.id
      };
    case types.UPDATE_ACTIVITY_ADDRESS:
      return {
        ...state,
        placeName: action.text
      };

    /**
     *  NUMBER
     */

    case types.UPDATE_MINIMUM_NUMBER:
      return {
        ...state,
        minimumNumber: action.value,
        minimumRevenue: (action.perParticipant * action.value) - action.venueCost
      };
    case types.UPDATE_MAXIMUM_NUMBER:
      return {
        ...state,
        maximumNumber: action.value,
        maximumRevenue: (action.perParticipant * action.value) - action.venueCost
      };
    case types.UPDATE_EXACTLY_NUMBER:
      return {
        ...state,
        exactlyNumber: action.value,
        minimumNumber: action.value,
        maximumNumber: action.value,
        minimumRevenue: (action.perParticipant * action.value) - action.venueCost,
        maximumRevenue: (action.perParticipant * action.value) - action.venueCost
      };
    case types.UPDATE_EXACTLY_SWITCH:
      return {
        ...state,
        isExactlySwitchOn: action.value,
      };

    /**
     *  PRICE
     */

    case types.UPDATE_FREE_SWITCH:
      return {
        ...state,
        isFreeSwitchOn: action.value
      };
    case types.UPDATE_VENUE_COST:
      return {
        ...state,
        venueCost: action.value,
        minimumRevenue: (action.perParticipant * action.min) - action.value,
        maximumRevenue: (action.perParticipant * action.max) - action.value
      };
    case types.UPDATE_PRICE_PER_PARTICIPANT:
      return {
        ...state,
        pricePerParticipant: action.value,
        minimumRevenue: (action.value * action.min) - action.venueCost,
        maximumRevenue: (action.value * action.max) - action.venueCost
      };

    /**
     *  PRIVATE
     */

    case types.UPDATE_PRIVATE_ACTIVITY:
      return {
        ...state,
        isActivityPrivate: action.value
      };

    /**
     *  Loading
     */

    case types.CHANGE_LOADING_STATUS:
      return {
        ...state,
        isNewActivityLoading: action.value
      };

    /**
     *  Reset fields
     */

    case types.RESET_NEW_ACTIVITY_FIELDS:
      return {
        ...state,
        activityTitle: '',
        activityDescription: '',
        sportName: '',
        levelMinSliderValue: 1,
        levelMaxSliderValue: 4,
        allLevels: [],
        placeName: '',
        newActivityDate: '',
        newActivityEndDate: '',
        minimumNumber: 0,
        maximumNumber: 0,
        pricePerParticipant: 0,
        exactlyNumber: 0,
        areErrorsShown: false
      };

    /**
     *  Errors
     */

    case types.SHOW_NEW_ACTIVITY_ERRORS:
      return {
        ...state,
        areErrorsShown: action.value
      };

    default: return state;
  }
};
