import React from 'react';
import { View, Text, Switch } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateFreeSwitch } from 'sportunity/src/action/newActivityActions';
import { colors } from 'sportunity/src/theme';
import style from './style';

const FreeSwitch = ({ isFreeSwitchOn, updateFreeSwitch }) => {

  const controlFreeSwitch = () => {
    if (isFreeSwitchOn) {
      updateFreeSwitch(false);
    } else {
      updateFreeSwitch(true);
    }
  }

  return(
    <View style={style.container}>

      <View style={style.switchContainer}>
        <Text style={style.text}>
          Free
        </Text>

        <Switch
          style={style.exactlySwitch}
          onTintColor={colors.skyBlue}
          value={isFreeSwitchOn}
          onValueChange={controlFreeSwitch}
        />
      </View>

    </View>
  )
}

FreeSwitch.propTypes = {
  isFreeSwitchOn: React.PropTypes.bool.isRequired,
  updateFreeSwitch: React.PropTypes.func.isRequired
};

const stateToProps = (state) => ({
  isFreeSwitchOn: state.sportunityNewActivity.isFreeSwitchOn,
});

const dispatchToProps = (dispatch) => ({
  updateFreeSwitch: bindActionCreators(updateFreeSwitch, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(FreeSwitch);
