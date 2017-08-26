import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateNumberModal } from 'sportunity/src/action/newActivityActions';

import style from './style';

const ValidateButton = ({ isNumberModalVisible, updateNumberModal }) => {

  const openCloseNumberModal = () => {
    if (isNumberModalVisible) {
      updateNumberModal(false);
    } else {
      updateNumberModal(true);
    }
  }

  return(
    <TouchableOpacity
      style={style.container}
      onPress={openCloseNumberModal}
    >
      <Text style={style.text}>
        OK
      </Text>
    </TouchableOpacity>
  )
}

ValidateButton.propTypes = {
  updateNumberModal: React.PropTypes.func.isRequired,
  isNumberModalVisible: React.PropTypes.bool.isRequired
};

const stateToProps = (state) => ({
  isNumberModalVisible: state.sportunityNewActivity.isNumberModalVisible,
});

const dispatchToProps = (dispatch) => ({
  updateNumberModal: bindActionCreators(updateNumberModal, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(ValidateButton);
