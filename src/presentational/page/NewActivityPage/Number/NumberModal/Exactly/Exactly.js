import React from 'react';
import {
  View,
  TextInput,
  Text,
  Switch
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateExactlyNumber, updateExactlySwitch } from 'sportunity/src/action/newActivityActions';
import { colors } from 'sportunity/src/theme';
import style from './style';

const Exactly = ({
  updateExactlyNumber,
  isExactlySwitchOn,
  updateExactlySwitch,
  venueCost,
  pricePerParticipant
}) => {

  const addExactly = (value) => {
    const finalValue = parseInt(value, 10);
    updateExactlyNumber(finalValue, venueCost, pricePerParticipant);
  }

  const onOffExactlySwitch = () => {
    if (isExactlySwitchOn) {
      updateExactlySwitch(false);
    } else {
      updateExactlySwitch(true);
    }
  }

  return(
    <View style={style.container}>

      <View style={style.switchContainer}>
        <Text style={style.text}>
          Exactly
        </Text>

        <Switch
          style={style.exactlySwitch}
          onTintColor={colors.skyBlue}
          value={isExactlySwitchOn}
          onValueChange={onOffExactlySwitch}
        />
      </View>
      {
        isExactlySwitchOn ?
          <TextInput
            style={style.input}
            autoCorrect={false}
            placeholderTextColor="silver"
            placeholder="0"
            autoCapitalize="none"
            selectionColor="#ffffff"
            keyboardType="numeric"
            underlineColorAndroid={colors.skyBlue}
            onChangeText={addExactly}
          /> :
            null
      }

    </View>
  )
}

Exactly.propTypes = {
  updateExactlyNumber: React.PropTypes.func.isRequired,
  isExactlySwitchOn: React.PropTypes.bool.isRequired,
  updateExactlySwitch: React.PropTypes.func.isRequired,
  venueCost: React.PropTypes.number.isRequired,
  pricePerParticipant: React.PropTypes.number.isRequired,
};


const stateToProps = (state) => ({
  isExactlySwitchOn: state.sportunityNewActivity.isExactlySwitchOn,
  venueCost: state.sportunityNewActivity.venueCost,
  pricePerParticipant: state.sportunityNewActivity.pricePerParticipant,
});

const dispatchToProps = (dispatch) => ({
  updateExactlyNumber: bindActionCreators(updateExactlyNumber, dispatch),
  updateExactlySwitch: bindActionCreators(updateExactlySwitch, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(Exactly);
