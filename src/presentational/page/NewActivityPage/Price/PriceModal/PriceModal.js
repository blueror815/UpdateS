import React from 'react';
import { Modal, Text, TouchableOpacity, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updatePriceModal } from 'sportunity/src/action/newActivityActions';
import icons from 'sportunity/src/theme/images';
import style from './style';

import FreeSwitch from './FreeSwitch/FreeSwitch.js';
import Prices from './Prices/Prices.js';
import Button from './Button/Button.js';

const PriceModal = ({ updatePriceModal, isPriceModalVisible }) => {

  const openClosePriceModal = () => {
    if (isPriceModalVisible) {
      updatePriceModal(false);
    } else {
      updatePriceModal(true);
    }
  }

  return(
    <View>
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={isPriceModalVisible}
        onRequestClose={() => false}
      >
        <View style={style.header}>
          <TouchableOpacity
            onPress={openClosePriceModal}
            style={style.icon}
          >
            <Image
              source={icons.down_arrow}
            />
          </TouchableOpacity>

          <Text style={style.title}>
            Price
          </Text>
        </View>

        <FreeSwitch />

        <Prices />

        <Button />

      </Modal>

    </View>
  )
}

PriceModal.propTypes = {
  isPriceModalVisible: React.PropTypes.bool.isRequired,
  updatePriceModal: React.PropTypes.func.isRequired
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
)(PriceModal);
