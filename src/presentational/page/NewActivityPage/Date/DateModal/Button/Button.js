import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateDateModal } from 'sportunity/src/action/newActivityActions';

import style from './style';

const Button = ({ updateDateModal, isDateModalVisible }) => {

  const openCloseDateModal = () => {
    if (isDateModalVisible) {
      updateDateModal(false);
    } else {
      updateDateModal(true);
    }
  }

  return(
    <View style={style.container}>
      <TouchableOpacity
        style={style.buttonContainer}
        onPress={openCloseDateModal}
      >
        <Text style={style.text}>
          Validate
        </Text>
      </TouchableOpacity>
    </View>
  )
}

Button.propTypes = {
  updateDateModal: React.PropTypes.func.isRequired,
  isDateModalVisible: React.PropTypes.bool.isRequired
};

const stateToProps = (state) => ({
  isDateModalVisible: state.sportunityNewActivity.isDateModalVisible,
});

const dispatchToProps = (dispatch) => ({
  updateDateModal: bindActionCreators(updateDateModal, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(Button);
