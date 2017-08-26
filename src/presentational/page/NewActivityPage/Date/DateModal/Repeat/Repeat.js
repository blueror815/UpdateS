import React from 'react';
import { View, Text, Switch, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateRepeatSwitch, updateRepeatValue } from 'sportunity/src/action/newActivityActions';
import { colors } from 'sportunity/src/theme';
import style from './style';

const Repeat = ({ isRepeatSwitchOn, updateRepeatSwitch, updateRepeatValue }) => {

  const controlRepeatSwitch = (value) => {
    updateRepeatSwitch(value);
  }
  const controlRepeatValue = (value) => {
    updateRepeatValue(value);
  }

  return(
    <View>
      <View style={style.switchContainer}>
        <Text style={style.text}>
          Repeat
        </Text>

        <Switch
          style={style.repeatSwitch}
          onTintColor={colors.skyBlue}
          value={isRepeatSwitchOn}
          onValueChange={controlRepeatSwitch}
        />
      </View>
      {
        isRepeatSwitchOn ?
          <View style={style.repeatValuesContainer}>
            <Text style={style.text}>
              Repeat weekly
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
              onChangeText={controlRepeatValue}
            />
          </View> : null
      }

    </View>
  )
}

Repeat.propTypes = {
  isRepeatSwitchOn: React.PropTypes.bool.isRequired,
  updateRepeatSwitch: React.PropTypes.func.isRequired,
  updateRepeatValue: React.PropTypes.func.isRequired,
};

const stateToProps = (state) => ({
  isRepeatSwitchOn: state.sportunityNewActivity.isRepeatSwitchOn,
});

const dispatchToProps = (dispatch) => ({
  updateRepeatSwitch: bindActionCreators(updateRepeatSwitch, dispatch),
  updateRepeatValue: bindActionCreators(updateRepeatValue, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(Repeat);
