// Actions Names
export const FILTER_CHANGE_HOUR = 'FILTER_CHANGE_HOUR';
export const FILTER_CHANGE_PRICE = 'FILTER_CHANGE_PRICE';
export const FILTER_CHANGE_AROUND_OF_PLACE = 'FILTER_CHANGE_AROUND_OF_PLACE';

// Actions Creators
export const changeFilterHour = (changedHours) => ({
  type: FILTER_CHANGE_HOUR,
  changedHours
});

export const changeFilterPrice = (changedPrices) => ({
  type: FILTER_CHANGE_PRICE,
  changedPrices
});

export const setAroundOfPlace = (inc) => ({
  type: FILTER_CHANGE_AROUND_OF_PLACE,
  inc,
});
