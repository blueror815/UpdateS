import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateFromHour, updateFromMinute, updateToHour, updateToMinute } from 'sportunity/src/action/newActivityActions';
import { colors } from 'sportunity/src/theme';
import style from './style';


const FromTo = ({ updateFromHour, updateFromMinute, updateToHour, updateToMinute }) => {

  const addFromHour = (value) => {
    // Convert to two digits
    const finalValue = (`0${value}`).slice(-2);
    updateFromHour(finalValue);
  }
  const addFromMinute = (value) => {
    const finalValue = (`0${value}`).slice(-2);
    updateFromMinute(finalValue);
  }
  const addToHour = (value) => {
    const finalValue = (`0${value}`).slice(-2);
    updateToHour(finalValue);
  }
  const addToMinute = (value) => {
    const finalValue = (`0${value}`).slice(-2);
    updateToMinute(finalValue);
  }

  return(
    <View style={style.container}>
      <Text style={style.text}>
        From
      </Text>

      <View style={style.hourContainer}>
        <TextInput
          style={style.input}
          autoCorrect={false}
          placeholderTextColor="silver"
          placeholder="0"
          maxLength={2}
          autoCapitalize="none"
          selectionColor="#ffffff"
          keyboardType="numeric"
          onChangeText={addFromHour}
          underlineColorAndroid={colors.skyBlue}
        />
        <Text style={style.hourText}>
          :
        </Text>
        <TextInput
          style={style.input}
          autoCorrect={false}
          placeholderTextColor="silver"
          placeholder="00"
          maxLength={2}
          autoCapitalize="none"
          selectionColor="#ffffff"
          keyboardType="numeric"
          onChangeText={addFromMinute}
          underlineColorAndroid={colors.skyBlue}
        />
      </View>

      <Text style={style.text}>
        To
      </Text>

      <View style={style.hourContainer}>
        <TextInput
          style={style.input}
          autoCorrect={false}
          placeholderTextColor="silver"
          placeholder="0"
          maxLength={2}
          autoCapitalize="none"
          selectionColor="#ffffff"
          keyboardType="numeric"
          onChangeText={addToHour}
          underlineColorAndroid={colors.skyBlue}

        />
        <Text style={style.hourText}>
          :
        </Text>
        <TextInput
          style={style.input}
          autoCorrect={false}
          placeholderTextColor="silver"
          placeholder="00"
          maxLength={2}
          autoCapitalize="none"
          selectionColor="#ffffff"
          keyboardType="numeric"
          onChangeText={addToMinute}
          underlineColorAndroid={colors.skyBlue}
        />
      </View>
    </View>
  )
}

FromTo.propTypes = {
  updateFromHour: React.PropTypes.func.isRequired,
  updateFromMinute: React.PropTypes.func.isRequired,
  updateToHour: React.PropTypes.func.isRequired,
  updateToMinute: React.PropTypes.func.isRequired,

};

const dispatchToProps = (dispatch) => ({
  updateFromHour: bindActionCreators(updateFromHour, dispatch),
  updateFromMinute: bindActionCreators(updateFromMinute, dispatch),
  updateToHour: bindActionCreators(updateToHour, dispatch),
  updateToMinute: bindActionCreators(updateToMinute, dispatch),
});

export default connect(
  null,
  dispatchToProps
)(FromTo);
