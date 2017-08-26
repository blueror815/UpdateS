import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateTitle, updateDescription } from 'sportunity/src/action/newActivityActions';
import { colors } from 'sportunity/src/theme';
import style from './style';

const Inputs = ({ activityTitle, activityDescription, updateTitle, updateDescription }) => {

  const addTitle = (text) => {
    updateTitle(text);
  }

  const addDescription = (text) => {
    updateDescription(text);
  }

  return(
    <View>
      <View style={style.inputContainer}>
        <Text style={style.text}>
          Title
        </Text>

        <TextInput
          style={style.input}
          multiline
          autoCorrect={false}
          placeholderTextColor="grey"
          placeholder="Enter Title"
          autoCapitalize="none"
          onChangeText={addTitle}
          underlineColorAndroid={colors.silver}
          value={activityTitle}
        />
      </View>

      <View style={style.textareaContainer}>
        <Text style={style.text}>
          Description
        </Text>

        <TextInput
          style={style.textarea}
          multiline
          numberOfLines={10}
          autoCorrect={false}
          placeholderTextColor="grey"
          placeholder="Enter Description (optional)"
          autoCapitalize="none"
          onChangeText={addDescription}
          underlineColorAndroid={colors.silver}
          value={activityDescription}
        />
      </View>
    </View>
  )
}

Inputs.propTypes = {
  activityTitle: React.PropTypes.string.isRequired,
  activityDescription: React.PropTypes.string.isRequired,
  updateTitle: React.PropTypes.func.isRequired,
  updateDescription: React.PropTypes.func.isRequired
};

const stateToProps = (state) => ({
  activityTitle: state.sportunityNewActivity.activityTitle,
  activityDescription: state.sportunityNewActivity.activityDescription,
});

const dispatchToProps = (dispatch) => ({
  updateTitle: bindActionCreators(updateTitle, dispatch ),
  updateDescription: bindActionCreators(updateDescription, dispatch ),
});

export default connect(
  stateToProps,
  dispatchToProps
)(Inputs);
