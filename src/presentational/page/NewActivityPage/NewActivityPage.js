import React from 'react';
import { ScrollView, Text, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Relay from 'react-relay';
import moment from 'moment';
// used for validate button
import validateStyle from 'sportunity/src/presentational/page/NewActivityPage/Validate/style.js';


import style from './style';
import Inputs from './Inputs/Inputs.js';
import Sport from './Sport/Sport.js';
import Place from './Place/Place.js';
import Date from './Date/Date.js';
import Level from './Level/Level.js';
import Price from './Price/Price.js';
import Number from './Number/Number.js';
import Private from './Private/Private.js';
import Validate from './Validate/Validate.js';

/**
* NewActivity root component
*/
const NewActivityPage = ({
  viewer,
  activityTitle,
  activityDescription,
  sportName,
  allLevels,
  placeName,
  newActivityDate,
  newActivityEndDate,
  newActivityDateForServer,
  newActivityEndDateForServer,
  minimumNumber,
  maximumNumber,
  areErrorsShown,
  isLoggedIn
}) => (

  <ScrollView contentContainerStyle={style.container}>

    <Inputs />
    {
      areErrorsShown && (!activityTitle || !activityDescription) ?
        <Text style={style.errorText}>Please enter title and description</Text> :
          null
    }

    <Sport />
    {
      areErrorsShown && !sportName ?
        <Text style={style.errorText}>Please select a sport</Text> :
          null
    }

    { sportName ? <Level /> : null }
    {
      areErrorsShown && (sportName && allLevels.length === 0) ?
        <Text style={style.errorText}>Please select a level</Text> :
          null
    }

    <Place />
    {
      areErrorsShown && !placeName ?
        <Text style={style.errorText}>Please select a place</Text> :
          null
    }

    <Date />
    {
      areErrorsShown && (!newActivityDate || !newActivityEndDate) ?
        <Text style={style.errorText}>Please select a starting and ending date</Text> :
          null
    }
    {
      areErrorsShown && moment(newActivityEndDateForServer).isBefore(newActivityDateForServer) ?
        <Text style={style.errorText}>Ending date must be later then starting date</Text> :
          null
    }

    <Number />
    {
      areErrorsShown && (!minimumNumber || !maximumNumber) ?
        <Text style={style.errorText}>Please select number of participants</Text> :
          null
    }

    { minimumNumber && maximumNumber ? <Price /> : null }

    <Private />
    {
      isLoggedIn ?
        <Validate
          viewer={viewer}
        /> :
        <TouchableOpacity
          style={validateStyle.button}
          onPress={() => {
            Alert.alert(
              'Info',
              'You need to login first!',
              [
                {text: 'OK', onPress: () => Actions.settings()},
              ]
            )
          }}
        >
          <Text style={validateStyle.text}>
            Validate
          </Text>
        </TouchableOpacity>
    }


  </ScrollView>

);

NewActivityPage.propTypes = {
  viewer: React.PropTypes.object.isRequired,
  activityTitle: React.PropTypes.string.isRequired,
  activityDescription: React.PropTypes.string.isRequired,
  sportName: React.PropTypes.string.isRequired,
  allLevels: React.PropTypes.array.isRequired,
  placeName: React.PropTypes.string.isRequired,
  newActivityDate: React.PropTypes.string.isRequired,
  newActivityEndDate: React.PropTypes.string.isRequired,
  newActivityDateForServer: React.PropTypes.string.isRequired,
  newActivityEndDateForServer: React.PropTypes.string.isRequired,
  minimumNumber: React.PropTypes.number.isRequired,
  maximumNumber: React.PropTypes.number.isRequired,
  areErrorsShown: React.PropTypes.bool.isRequired,
  isLoggedIn: React.PropTypes.bool.isRequired
};

const stateToProps = (state) => ({
  activityTitle: state.sportunityNewActivity.activityTitle,
  activityDescription: state.sportunityNewActivity.activityDescription,
  sportName: state.sportunityNewActivity.sportName,
  allLevels: state.sportunityNewActivity.allLevels,
  placeName: state.sportunityNewActivity.placeName,
  newActivityDate: state.sportunityNewActivity.newActivityDate,
  newActivityEndDate: state.sportunityNewActivity.newActivityEndDate,
  newActivityDateForServer: state.sportunityNewActivity.newActivityDateForServer,
  newActivityEndDateForServer: state.sportunityNewActivity.newActivityEndDateForServer,
  minimumNumber: state.sportunityNewActivity.minimumNumber,
  maximumNumber: state.sportunityNewActivity.maximumNumber,
  areErrorsShown: state.sportunityNewActivity.areErrorsShown,
  isLoggedIn: state.sportunityDrawer.isLoggedIn,
});

const ReduxContainer = connect(
  stateToProps,
  null
)(NewActivityPage);

export default Relay.createContainer(ReduxContainer, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer{
        ${Validate.getFragment('viewer')}
      }
    `
  }
});
