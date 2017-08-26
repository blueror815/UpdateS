import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateDateModal } from 'sportunity/src/action/newActivityActions';
import icons from 'sportunity/src/theme/images';
import style from './style';
import DateModal from './DateModal/DateModal.js';

const Date = ({
  updateDateModal,
  isDateModalVisible,
  newActivityDate,
  newActivityEndDate,
  fromHour,
  fromMinute,
  toHour,
  toMinute,
  isRepeatSwitchOn,
  repeatValue,
}) => {

  const openCloseDateModal = () => {
    if (isDateModalVisible) {
      updateDateModal(false);
    } else {
      updateDateModal(true);
    }
  }

  return(
    <View>
      <DateModal
        isDateModalVisible={isDateModalVisible}
        openCloseDateModal={openCloseDateModal}
        newActivityDate={newActivityDate}
        newActivityEndDate={newActivityEndDate}
        fromHour={fromHour}
        fromMinute={fromMinute}
        toHour={toHour}
        toMinute={toMinute}
        isRepeatSwitchOn={isRepeatSwitchOn}
        repeatValue={repeatValue}
      />
      <TouchableOpacity
        style={style.container}
        onPress={openCloseDateModal}
      >
        <View style={style.subContainer}>
          <Text style={style.text}>
            Date
          </Text>
          {
            newActivityDate === '' ||
            fromHour === 0 ||
            toHour === 0 ?
              <Text style={style.select}>
                Select
              </Text> :
              <View>
                <Text style={style.select}>
                  Starts: {newActivityDate}
                </Text>
              </View>
          }
          {
            newActivityEndDate === '' ||
            fromHour === 0 ||
            toHour === 0 ?
              null :
              <View>
                <Text style={style.select}>
                  Ends: {newActivityEndDate}
                </Text>
                <Text style={style.select}>
                  From {fromHour} : {fromMinute} to {toHour} : {toMinute}
                </Text>
                {
                  isRepeatSwitchOn ?
                    <Text style={style.select}>
                      Every {repeatValue} weeks
                    </Text> : null
                }
              </View>
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

Date.propTypes = {
  updateDateModal: React.PropTypes.func.isRequired,
  isDateModalVisible: React.PropTypes.bool.isRequired,
  newActivityDate: React.PropTypes.string.isRequired,
  newActivityEndDate: React.PropTypes.string.isRequired,
  fromHour: React.PropTypes.string.isRequired,
  fromMinute: React.PropTypes.string.isRequired,
  toHour: React.PropTypes.string.isRequired,
  toMinute: React.PropTypes.string.isRequired,
  isRepeatSwitchOn: React.PropTypes.bool.isRequired,
  repeatValue: React.PropTypes.string.isRequired,
};

const stateToProps = (state) => ({
  isDateModalVisible: state.sportunityNewActivity.isDateModalVisible,
  newActivityDate: state.sportunityNewActivity.newActivityDate,
  newActivityEndDate: state.sportunityNewActivity.newActivityEndDate,
  fromHour: state.sportunityNewActivity.fromHour,
  fromMinute: state.sportunityNewActivity.fromMinute,
  toHour: state.sportunityNewActivity.toHour,
  toMinute: state.sportunityNewActivity.toMinute,
  isRepeatSwitchOn: state.sportunityNewActivity.isRepeatSwitchOn,
  repeatValue: state.sportunityNewActivity.repeatValue,

});

const dispatchToProps = (dispatch) => ({
  updateDateModal: bindActionCreators(updateDateModal, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(Date);
