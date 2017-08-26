import React from 'react';
import { Modal, Text, TouchableOpacity, ScrollView, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateDateModal } from 'sportunity/src/action/newActivityActions';
import icons from 'sportunity/src/theme/images';
import style from './style';

import CalendarDate from './CalendarDate/CalendarDate.js';
import FromTo from './FromTo/FromTo.js';
import Repeat from './Repeat/Repeat.js';
import Button from './Button/Button.js';

const DateModal = ({ isDateModalVisible, updateDateModal }) => {

  const openCloseDateModal = () => {
    if (isDateModalVisible) {
      updateDateModal(false);
    } else {
      updateDateModal(true);
    }
  }

  return(
    <View>
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={isDateModalVisible}
        onRequestClose={() => false}
      >
        <View style={style.header}>
          <TouchableOpacity
            onPress={openCloseDateModal}
            style={style.icon}
          >
            <Image
              source={icons.down_arrow}
            />
          </TouchableOpacity>

          <Text style={style.title}>
            Date
          </Text>
        </View>

        <ScrollView>
          <CalendarDate />

          <FromTo />

          <Repeat />

          <Button />

        </ScrollView>

      </Modal>

    </View>
  )
}
DateModal.propTypes = {
  isDateModalVisible: React.PropTypes.bool.isRequired,
  updateDateModal: React.PropTypes.func.isRequired,
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
)(DateModal);
