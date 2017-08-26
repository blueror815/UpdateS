import React from 'react';
import { View, Text, Switch } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateLevelRange } from 'sportunity/src/action/newActivityActions';
import style from './style';

const Range = ({ isLevelSwitchOn, updateLevelRange }) => {

  const onOffLevelRange = () => {
    if (isLevelSwitchOn) {
      updateLevelRange(false);
    } else {
      updateLevelRange(true);
    }
  }

  return(
    <View style={style.container}>
      <Text style={style.text}>
        Range
      </Text>
      <Switch
        onTintColor="#4286f4"
        value={isLevelSwitchOn}
        onValueChange={onOffLevelRange}
      />
    </View>
  )
}

Range.propTypes = {
  isLevelSwitchOn: React.PropTypes.bool.isRequired,
  updateLevelRange: React.PropTypes.func.isRequired
};

const stateToProps = (state) => ({
  isLevelModalVisible: state.sportunityNewActivity.isLevelModalVisible,
  isLevelSwitchOn: state.sportunityNewActivity.isLevelSwitchOn,
});

const dispatchToProps = (dispatch) => ({
  updateLevelRange: bindActionCreators(updateLevelRange, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(Range);
