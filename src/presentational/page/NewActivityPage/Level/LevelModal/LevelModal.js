import React from 'react';
import { Modal, Text, TouchableOpacity, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateLevelModal } from 'sportunity/src/action/newActivityActions';
import icons from 'sportunity/src/theme/images';
import style from './style';
import LevelList from './LevelList/LevelList.js';
import Range from './Range/Range.js';
import MultiSlider from './MultiSlider/Multislider.js';
import ValidateButton from './ValidateButton/ValidateButton.js';

const LevelModal = ({ isLevelModalVisible, isLevelSwitchOn, updateLevelModal}) => {

  const openCloseLevelModal = () => {
    if (isLevelModalVisible) {
      updateLevelModal(false);
    } else {
      updateLevelModal(true);
    }
  }

  return(
    <View>
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={isLevelModalVisible}
        onRequestClose={() => false}
      >

        <View style={style.header}>
          <TouchableOpacity
            onPress={openCloseLevelModal}
            style={style.icon}
          >
            <Image
              source={icons.down_arrow}
            />
          </TouchableOpacity>

          <Text style={style.title}>
            Level
          </Text>
        </View>

        <Range />

        {
          !isLevelSwitchOn ?
            <LevelList /> :
            <MultiSlider />
        }

        <ValidateButton />

      </Modal>
    </View>
  )
}

LevelModal.propTypes = {
  isLevelModalVisible: React.PropTypes.bool.isRequired,
  isLevelSwitchOn: React.PropTypes.bool.isRequired,
  updateLevelModal: React.PropTypes.func.isRequired,
};

const stateToProps = (state) => ({
  isLevelModalVisible: state.sportunityNewActivity.isLevelModalVisible,
  isLevelSwitchOn: state.sportunityNewActivity.isLevelSwitchOn,
});

const dispatchToProps = (dispatch) => ({
  updateLevelModal: bindActionCreators(updateLevelModal, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(LevelModal);
