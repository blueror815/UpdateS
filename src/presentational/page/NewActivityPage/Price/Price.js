import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updatePriceModal } from 'sportunity/src/action/newActivityActions';
import icons from 'sportunity/src/theme/images';
import style from './style';
import PriceModal from './PriceModal/PriceModal.js';

const Price = ({
  isPriceModalVisible,
  updatePriceModal,
  isFreeSwitchOn,
  pricePerParticipant,
  minimumRevenue,
  maximumRevenue
}) => {

  const openClosePriceModal = () => {
    if (isPriceModalVisible) {
      updatePriceModal(false);
    } else {
      updatePriceModal(true);
    }
  }

  return(
    <View>
      <PriceModal />
      <TouchableOpacity
        style={style.container}
        onPress={openClosePriceModal}
      >
        <View style={style.subContainer}>
          <Text style={style.text}>
            Price
          </Text>
          {
            isFreeSwitchOn ?
              <Text style={style.select}>
                Free
              </Text> : null
          }
          {
            !isFreeSwitchOn && pricePerParticipant !== 0 ?
              <View>
                <Text style={style.select}>
                  {pricePerParticipant} CHF per participant
                </Text>
                <Text style={style.select}>
                  Revenue is from {minimumRevenue} to {maximumRevenue} CHF
                </Text>
              </View> : null
          }
          {
            !isFreeSwitchOn && pricePerParticipant === 0 ?
              <Text style={style.select}>
                Select
              </Text> : null
          }
        </View>
        <Image
          style={style.icon}
          source={icons.right_arrow_blue}
        />
      </TouchableOpacity>
    </View>
  )
}

Price.propTypes = {
  updatePriceModal: React.PropTypes.func.isRequired,
  isFreeSwitchOn: React.PropTypes.bool.isRequired,
  pricePerParticipant: React.PropTypes.number.isRequired,
  minimumRevenue: React.PropTypes.number.isRequired,
  maximumRevenue: React.PropTypes.number.isRequired,
  isPriceModalVisible: React.PropTypes.bool.isRequired
};

const stateToProps = (state) => ({
  isPriceModalVisible: state.sportunityNewActivity.isPriceModalVisible,
  isFreeSwitchOn: state.sportunityNewActivity.isFreeSwitchOn,
  pricePerParticipant: state.sportunityNewActivity.pricePerParticipant,
  minimumRevenue: state.sportunityNewActivity.minimumRevenue,
  maximumRevenue: state.sportunityNewActivity.maximumRevenue,

});

const dispatchToProps = (dispatch) => ({
  updatePriceModal: bindActionCreators(updatePriceModal, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(Price);
