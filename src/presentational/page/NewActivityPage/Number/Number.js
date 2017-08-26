import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateNumberModal } from 'sportunity/src/action/newActivityActions';
import icons from 'sportunity/src/theme/images';
import style from './style';
import NumberModal from './NumberModal/NumberModal.js';

const Number = ({
  updateNumberModal,
  minimumNumber,
  maximumNumber,
  exactlyNumber,
  isNumberModalVisible,
  isExactlySwitchOn,
}) => {

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
      <NumberModal />
      <View style={style.subContainer}>
        <Text style={style.text}>
          Number of Participants
        </Text>

        {
          !isExactlySwitchOn &&
          (minimumNumber <= 1 || maximumNumber <= 1) ?
            <Text style={style.select}>
              Select
            </Text> :
              null
        }
        {
          !isExactlySwitchOn &&
          minimumNumber > 1 &&
          maximumNumber > 1 ?
            <Text style={style.select}>
              {minimumNumber} - {maximumNumber}
            </Text> :
              null
        }
        {
          isExactlySwitchOn &&
          exactlyNumber <= 1 ?
            <Text style={style.select}>
              Select
            </Text> :
              null
        }
        {
          isExactlySwitchOn &&
          exactlyNumber > 1 ?
            <Text style={style.select}>
              {exactlyNumber}
            </Text> :
              null
        }
      </View>
      <Image
        style={style.icon}
        source={icons.right_arrow_blue}
      />
    </TouchableOpacity>
  )
}

Number.propTypes = {
  updateNumberModal: React.PropTypes.func.isRequired,
  maximumNumber: React.PropTypes.number.isRequired,
  minimumNumber: React.PropTypes.number.isRequired,
  exactlyNumber: React.PropTypes.number.isRequired,
  isExactlySwitchOn: React.PropTypes.bool.isRequired,
  isNumberModalVisible: React.PropTypes.bool.isRequired,
};

const stateToProps = (state) => ({
  isNumberModalVisible: state.sportunityNewActivity.isNumberModalVisible,
  isExactlySwitchOn: state.sportunityNewActivity.isExactlySwitchOn,
  minimumNumber: state.sportunityNewActivity.minimumNumber,
  maximumNumber: state.sportunityNewActivity.maximumNumber,
  exactlyNumber: state.sportunityNewActivity.exactlyNumber,
});

const dispatchToProps = (dispatch) => ({
  updateNumberModal: bindActionCreators(updateNumberModal, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(Number);
