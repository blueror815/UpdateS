import { STATUS_SPORTUNITY, IS_PARTICIPANTS_MODAL_VISIBLE } from '../../action/actionNames';


const defaultState = {
  status: {labal: 'AVAILABLE', color: '#000'},
  isParticipantsModalVisible: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case STATUS_SPORTUNITY:
      return {
        ...state,
        status: action.status
      };
    case IS_PARTICIPANTS_MODAL_VISIBLE:
      return {
        ...state,
        isParticipantsModalVisible: action.value
      };

    default:
      return state;
  }
};
