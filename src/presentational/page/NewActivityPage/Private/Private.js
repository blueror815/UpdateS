import React from 'react';
import { View, Text, Switch } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updatePrivateActivity } from 'sportunity/src/action/newActivityActions';
import { colors } from 'sportunity/src/theme';
import style from './style';

const Private = ({ updatePrivateActivity, isActivityPrivate }) => {

  const updatePrivate = () => {
    if (isActivityPrivate) {
      updatePrivateActivity(false);
    } else {
      updatePrivateActivity(true);
    }
  }
  return(
    <View
      style={style.container}
    >
      <Switch
        onTintColor={colors.skyBlue}
        value={isActivityPrivate}
        onValueChange={updatePrivate}
      />
      <Text style={style.text}>
        Private Sportunity
      </Text>
    </View>
  )
}

Private.propTypes = {
  updatePrivateActivity: React.PropTypes.func.isRequired,
  isActivityPrivate: React.PropTypes.bool.isRequired
};

const stateToProps = (state) => ({
  isActivityPrivate: state.sportunityNewActivity.isActivityPrivate
});

const dispatchToProps = (dispatch) => ({
  updatePrivateActivity: bindActionCreators(updatePrivateActivity, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(Private);
