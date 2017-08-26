import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateSportModal } from 'sportunity/src/action/newActivityActions';
import icons from 'sportunity/src/theme/images';
import style from './style';
import SportModal from './SportModal/SportModal.js';

const Sport = ({ updateSportModal, sportName, isSportModalVisible }) => {

  const openCloseSportModal = () => {
    if (isSportModalVisible) {
      updateSportModal(false);
    } else {
      updateSportModal(true);
    }
  }

  return(
    <TouchableOpacity
      style={style.container}
      onPress={openCloseSportModal}
    >
      <SportModal />

      <View style={style.subContainer}>
        <Text style={style.text}>
          Sport
        </Text>
        {
          sportName === '' ?
            <Text style={style.select}>
              Select
            </Text> :
            <Text style={style.select}>
              {sportName}
            </Text>
        }
      </View>
      <Image
        style={style.icon}
        source={icons.right_arrow_blue}
      />
    </TouchableOpacity>
  )
}

Sport.propTypes = {
  updateSportModal: React.PropTypes.func.isRequired,
  sportName: React.PropTypes.string.isRequired,
  isSportModalVisible: React.PropTypes.bool.isRequired
};

const stateToProps = (state) => ({
  sportName: state.sportunityNewActivity.sportName,
  isSportModalVisible: state.sportunityNewActivity.isSportModalVisible
});

const dispatchToProps = (dispatch) => ({
  updateSportModal: bindActionCreators(updateSportModal, dispatch)
});

export default connect(
  stateToProps,
  dispatchToProps
)(Sport);
