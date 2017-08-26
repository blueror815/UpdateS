import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateNewActivityDate, updateNewActivityEndDate } from 'sportunity/src/action/newActivityActions';
import moment from 'moment';
import Calendar from 'react-native-calendar';

import style from './style';

const CalendarDate = ({ updateNewActivityEndDate, updateNewActivityDate, newActivityDate, newActivityEndDate }) => {

  const addDate = (date) => {
    const finalDate = moment(date).format('MMMM DD YYYY');
    const dateForServer = date;
    updateNewActivityDate(finalDate, dateForServer);
  }

  const addEndDate = (date) => {
    const finalDate = moment(date).format('MMMM DD YYYY');
    const dateForServer = date;
    updateNewActivityEndDate(finalDate, dateForServer);
  }

  return(
    <View style={style.container}>
      <Text style={style.title}>Starting Date</Text>
      <Calendar
        customStyle={style}
        showControls
        selectedDate={newActivityDate}
        onDateSelect={(date) => addDate(date)}
      />

      <Text style={style.title}>Ending Date</Text>
      <Calendar
        customStyle={style}
        showControls
        selectedDate={newActivityEndDate}
        onDateSelect={(date) => addEndDate(date)}
      />
    </View>
  )
}

CalendarDate.propTypes = {
  updateNewActivityDate: React.PropTypes.func.isRequired,
  updateNewActivityEndDate: React.PropTypes.func.isRequired,
  newActivityDate: React.PropTypes.string.isRequired,
  newActivityEndDate: React.PropTypes.string.isRequired,
};

const stateToProps = (state) => ({
  newActivityDate: state.sportunityNewActivity.newActivityDate,
  newActivityEndDate: state.sportunityNewActivity.newActivityEndDate,
});

const dispatchToProps = (dispatch) => ({
  updateNewActivityEndDate: bindActionCreators(updateNewActivityEndDate, dispatch),
  updateNewActivityDate: bindActionCreators(updateNewActivityDate, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(CalendarDate);
