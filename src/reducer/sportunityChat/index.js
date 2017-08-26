import { IS_CHAT_MODAL_VISIBLE, COUNT_LAST_CHAT } from '../../action/actionNames';


const defaultState = {
  isChatModalVisible: false,
  count: 1
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case IS_CHAT_MODAL_VISIBLE:
      return {
        ...state,
        isChatModalVisible: action.value
      };
    case COUNT_LAST_CHAT:
      return {
        ...state,
        count: action.currentCount
      };
    default:
      return state;
  }
};
