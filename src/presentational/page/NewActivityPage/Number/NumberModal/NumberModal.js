import React from 'react';
import { Modal, Text, TouchableOpacity, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateNumberModal } from 'sportunity/src/action/newActivityActions';
import icons from 'sportunity/src/theme/images';
import style from './style';
import Minimum from './Minimum/Minimum.js';
import Maximum from './Maximum/Maximum.js';
import Exactly from './Exactly/Exactly.js';
import Button from './Button/Button.js';

const NumberModal = ({
  isNumberModalVisible,
  updateNumberModal,
  isExactlySwitchOn
}) => {

  const openCloseNumberModal = () => {
    if (isNumberModalVisible) {
      updateNumberModal(false);
    } else {
      updateNumberModal(true);
    }
  }

  return(
    <View>
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={isNumberModalVisible}
        onRequestClose={() => false}
      >
        <View style={style.header}>
          <TouchableOpacity
            onPress={openCloseNumberModal}
            style={style.icon}
          >
            <Image
              source={icons.down_arrow}
            />
          </TouchableOpacity>

          <Text style={style.title}>
            Number of patrticipants
          </Text>
        </View>
        {
          !isExactlySwitchOn ?
            <View>
              <Minimum />
              <Maximum />
            </View> :
              null
        }
        <Exactly />
        <Button />
      </Modal>

    </View>
  )
}

NumberModal.propTypes = {
  isNumberModalVisible: React.PropTypes.bool.isRequired,
  updateNumberModal: React.PropTypes.func.isRequired,
  isExactlySwitchOn: React.PropTypes.bool.isRequired,
};

const stateToProps = (state) => ({
  isNumberModalVisible: state.sportunityNewActivity.isNumberModalVisible,
  isExactlySwitchOn: state.sportunityNewActivity.isExactlySwitchOn,
});

const dispatchToProps = (dispatch) => ({
  updateNumberModal: bindActionCreators(updateNumberModal, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(NumberModal);
