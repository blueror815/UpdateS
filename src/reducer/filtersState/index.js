import {
  FILTER_CHANGE_HOUR,
  FILTER_CHANGE_PRICE,
  FILTER_CHANGE_AROUND_OF_PLACE,
} from '../../action/FiltersStateActions';

const initialState = {
  minHour: 0,
  maxHour: 24,
  minPrice: 0,
  maxPrice: 1000,
  aroundOfPlace: 1,
  filters: [
    { id: 1, caption: 'Sports' },
    { id: 2, caption: 'Dates' },
    { id: 3, caption: 'Places' },
    { id: 4, caption: 'Price' },
    { id: 5, caption: 'Hour' },
    { id: 6, caption: 'Advanced Filters' },
  ],
  savedFilters: [
    { id: 1, caption: 'Beach Volley' },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FILTER_CHANGE_HOUR: {
      const { changedHours } = action;
      return {
        ...state,
        minHour: changedHours[0],
        maxHour: changedHours[1]
      };
    }
    case FILTER_CHANGE_PRICE: {
      const { changedPrices } = action;
      return {
        ...state,
        minHour: changedPrices[0],
        maxHour: changedPrices[1]
      };
    }
    case FILTER_CHANGE_AROUND_OF_PLACE: {
      const { inc } = action;
      let aroundOfPlace = state.aroundOfPlace + inc;
      if (aroundOfPlace < 0) {
        aroundOfPlace = 0;
      }
      return {
        ...state,
        aroundOfPlace
      };
    }
    default: {
      return state;
    }
  }
};
