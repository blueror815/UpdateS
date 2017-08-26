import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updatePriceModal } from 'sportunity/src/action/newActivityActions';
import style from './style';

const Button = ({ isPriceModalVisible, updatePriceModal }) => {

  const openClosePriceModal = () => {
    if (isPriceModalVisible) {
      updatePriceModal(false);
    } else {
      updatePriceModal(true);
    }
  }

  return(
    <View style={style.container}>
      <TouchableOpacity
        style={style.buttonContainer}
        onPress={openClosePriceModal}
      >
        <Text style={style.text}>
          Set Price
        </Text>
      </TouchableOpacity>
    </View>
  )
}

Button.propTypes = {
  updatePriceModal: React.PropTypes.func.isRequired,
  isPriceModalVisible: React.PropTypes.bool.isRequired,
};

const stateToProps = (state) => ({
  isPriceModalVisible: state.sportunityNewActivity.isPriceModalVisible,
});

const dispatchToProps = (dispatch) => ({
  updatePriceModal: bindActionCreators(updatePriceModal, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(Button);
