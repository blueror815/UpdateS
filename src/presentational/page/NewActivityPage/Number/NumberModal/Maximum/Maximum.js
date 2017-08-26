import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateMaximumNumber } from 'sportunity/src/action/newActivityActions';
import { colors } from 'sportunity/src/theme';
import style from './style';

const Maximum = ({ updateMaximumNumber, pricePerParticipant, venueCost }) => {

  const addMaximum = (value) => {
    const finalValue = parseInt(value, 10);
    updateMaximumNumber(finalValue, venueCost, pricePerParticipant);
  }

  return(
    <View style={style.container}>

      <Text style={style.text}>
        Maximum
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
        onChangeText={addMaximum}
      />

    </View>
  )
}

Maximum.propTypes = {
  updateMaximumNumber: React.PropTypes.func.isRequired,
  venueCost: React.PropTypes.number.isRequired,
  pricePerParticipant: React.PropTypes.number.isRequired,
};

const stateToProps = (state) => ({
  venueCost: state.sportunityNewActivity.venueCost,
  pricePerParticipant: state.sportunityNewActivity.pricePerParticipant,
});

const dispatchToProps = (dispatch) => ({
  updateMaximumNumber: bindActionCreators(updateMaximumNumber, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(Maximum);
