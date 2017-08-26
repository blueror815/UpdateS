import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateVenueCost, updatePricePerParticipant, updateFreeSwitch } from 'sportunity/src/action/newActivityActions';
import { colors } from 'sportunity/src/theme';
import style from './style';

const Prices = ({
  updateVenueCost,
  updatePricePerParticipant,
  isFreeSwitchOn,
  minimumRevenue,
  maximumRevenue,
  minimumNumber,
  maximumNumber,
  pricePerParticipant,
  venueCost
}) => {
  const controlVenueCost = (value) => {
    const finalValue = parseInt(value, 10);
    updateVenueCost(finalValue, pricePerParticipant, minimumNumber, maximumNumber);
  }
  const controlPricePerParticipant = (value) => {
    const finalValue = parseInt(value, 10);
    updatePricePerParticipant(finalValue, venueCost, minimumNumber, maximumNumber);
  }

  return(
    <View style={style.container}>

      {
        !isFreeSwitchOn ?
          <View>
            <View style={style.valuesContainer}>
              <Text style={style.keyText}>
                Venue Cost
              </Text>

              <TextInput
                style={style.input}
                autoCorrect={false}
                placeholderTextColor="silver"
                placeholder="0"
                autoCapitalize="none"
                selectionColor="#ffffff"
                keyboardType="numeric"
                underlineColorAndroid={colors.skyBlue}
                onChangeText={controlVenueCost}
              />
            </View>

            <View style={style.valuesContainer}>
              <Text style={style.keyText}>
                Price per participant
              </Text>

              <TextInput
                style={style.input}
                autoCorrect={false}
                placeholderTextColor="silver"
                placeholder="0"
                autoCapitalize="none"
                selectionColor="#ffffff"
                keyboardType="numeric"
                underlineColorAndroid={colors.skyBlue}
                onChangeText={controlPricePerParticipant}
              />
            </View>

            <View style={style.valuesContainer}>
              <Text style={style.organizerText}>
                Organizer Price
              </Text>
            </View>

            <View style={style.revenueContainer}>
              <Text style={style.revenueKeyText}>
                Minimum revenue
              </Text>

              <Text style={style.revenueValueText}>
                {minimumRevenue}
              </Text>
            </View>

            <View style={style.revenueContainer}>
              <Text style={style.revenueKeyText}>
                Maximum revenue
              </Text>

              <Text style={style.revenueValueText}>
                {maximumRevenue}
              </Text>
            </View>
          </View> :
            null
      }

    </View>
  )
}

Prices.propTypes = {
  updateVenueCost: React.PropTypes.func.isRequired,
  updatePricePerParticipant: React.PropTypes.func.isRequired,
  isFreeSwitchOn: React.PropTypes.bool.isRequired,
  minimumRevenue: React.PropTypes.number.isRequired,
  maximumRevenue: React.PropTypes.number.isRequired,
  minimumNumber: React.PropTypes.number.isRequired,
  maximumNumber: React.PropTypes.number.isRequired,
  pricePerParticipant: React.PropTypes.number.isRequired,
  venueCost: React.PropTypes.number.isRequired,
};

const stateToProps = (state) => ({
  isFreeSwitchOn: state.sportunityNewActivity.isFreeSwitchOn,
  minimumRevenue: state.sportunityNewActivity.minimumRevenue,
  maximumRevenue: state.sportunityNewActivity.maximumRevenue,
  minimumNumber: state.sportunityNewActivity.minimumNumber,
  maximumNumber: state.sportunityNewActivity.maximumNumber,
  pricePerParticipant: state.sportunityNewActivity.pricePerParticipant,
  venueCost: state.sportunityNewActivity.venueCost
});

const dispatchToProps = (dispatch) => ({
  updateFreeSwitch: bindActionCreators(updateFreeSwitch, dispatch),
  updateVenueCost: bindActionCreators(updateVenueCost, dispatch),
  updatePricePerParticipant: bindActionCreators(updatePricePerParticipant, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(Prices);
