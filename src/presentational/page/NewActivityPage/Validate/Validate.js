import React from 'react';
import { View, TouchableOpacity, Text, AsyncStorage, Alert, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { changeLoadingStatus, showErrors, resetAllFields } from 'sportunity/src/action/newActivityActions';
import Relay from 'react-relay';
import { Actions } from 'react-native-router-flux';
import SportunityPage from '../../SportunityPage/SportunityPage.js';
import NewSportunityMutation from './NewSportunityMutation';
import style from './style';

const Validate = ({
  relay,
  activityTitle,
  activityDescription,
  sportName,
  pricePerParticipant,
  minimumNumber,
  maximumNumber,
  levelMinSliderValue,
  levelMaxSliderValue,
  newActivityDateForServer,
  newActivityEndDateForServer,
  viewer,
  isActivityPrivate,
  isNewActivityLoading,
  changeLoadingStatus,
  showErrors,
  resetAllFields
}) => {


  const validate = () => {
    console.log(viewer)
    changeLoadingStatus(true);
    showErrors(true);
    // Some data is hardcoded since we don't have it available at the moment
    const title = activityTitle;
    const description = activityDescription;
    const address = {
      country: 'France',
      city: 'Besançon',
      zip: '25000'
    };
    const venue = 'VmVudWU6NTgwZTlmNTkyNmJkMzgwMDAxMGYzOTE5';
    const organizers = [{
      organizer: viewer.id,
      isAdmin: false,
      role: 'COACH'
    }];
    const sport = sportName;
    const price = {
      currency: 'CHF',
      cents: pricePerParticipant
    };
    const participantRange = {
      from: minimumNumber,
      to: maximumNumber
    };
    const mode = 'RANDOM';
    const ageRestriction = {
      from: 0,
      to: 100
    };
    const sexRestriction = 'MALE';
    const levelRestriction = {
      from: levelMinSliderValue,
      to: levelMaxSliderValue
    };
    const beginningDate = newActivityDateForServer;
    const endingDate = newActivityEndDateForServer;
    let kind = 'PUBLIC';

    if(isActivityPrivate) {
      kind = 'PRIVATE';
    } else {
      kind = 'PUBLIC';
    }

    if (
      activityTitle === '' || activityDescription === '' || sportName === '' ||
      newActivityDateForServer === '' || newActivityEndDateForServer === '' ||
      maximumNumber === 0 || moment(newActivityEndDateForServer).isBefore(newActivityDateForServer)
    ) {
      Alert.alert(
        'Info',
        'You need add all fields!',
        [
          {text: 'OK', onPress: () => changeLoadingStatus(false)},
        ]
      )
    } else {
      AsyncStorage.getItem('authToken').then((token) => {
        if(token){
          relay.commitUpdate(
            new NewSportunityMutation({
              viewer,
              title,
              description,
              address,
              venue,
              organizers,
              sport,
              price,
              participantRange,
              mode,
              ageRestriction,
              sexRestriction,
              levelRestriction,
              beginningDate,
              endingDate,
              kind
            }),
            {
              onFailure: (transaction) => {
                console.log('error: ', transaction, transaction.getError(), transaction.getError());
              },
              onSuccess: (response) => {
                console.log(response);
                changeLoadingStatus(false);
                resetAllFields();
                Alert.alert(
                  'Info',
                  'Sportunity creation succesfull!',
                  [
                    {text: 'OK', onPress: () => Actions.sportunities()},
                  ]
                )
              },
            }
          );
        } else {
          changeLoadingStatus(false);
          Alert.alert(
            'Info',
            'You need to login first!',
            [
              {text: 'OK', onPress: () => Actions.settings()},
            ]
          )
        }
      });
    }
  }

  return(
    <View>
      <ActivityIndicator
        size="large"
        animating={isNewActivityLoading}
      />

      <TouchableOpacity
        style={style.button}
        onPress={validate}
        disabled={isNewActivityLoading}
      >
        <Text style={style.text}>
          Validate
        </Text>
      </TouchableOpacity>
    </View>
  )
}

Validate.propTypes = {
  relay: React.PropTypes.object.isRequired,
  activityTitle: React.PropTypes.string.isRequired,
  activityDescription: React.PropTypes.string.isRequired,
  sportName: React.PropTypes.string.isRequired,
  pricePerParticipant: React.PropTypes.number.isRequired,
  minimumNumber: React.PropTypes.number.isRequired,
  maximumNumber: React.PropTypes.number.isRequired,
  levelMinSliderValue: React.PropTypes.number.isRequired,
  levelMaxSliderValue: React.PropTypes.number.isRequired,
  newActivityDateForServer: React.PropTypes.string.isRequired,
  newActivityEndDateForServer: React.PropTypes.string.isRequired,
  isActivityPrivate: React.PropTypes.bool.isRequired,
  viewer: React.PropTypes.object.isRequired,
  isNewActivityLoading: React.PropTypes.bool.isRequired,
  changeLoadingStatus: React.PropTypes.func.isRequired,
  resetAllFields: React.PropTypes.func.isRequired,
  showErrors: React.PropTypes.func.isRequired,
};

const stateToProps = (state) => ({
  activityTitle: state.sportunityNewActivity.activityTitle,
  isActivityPrivate: state.sportunityNewActivity.isActivityPrivate,
  activityDescription: state.sportunityNewActivity.activityDescription,
  sportName: state.sportunityNewActivity.sportName,
  pricePerParticipant: state.sportunityNewActivity.pricePerParticipant,
  minimumNumber: state.sportunityNewActivity.minimumNumber,
  maximumNumber: state.sportunityNewActivity.maximumNumber,
  levelMinSliderValue: state.sportunityNewActivity.levelMinSliderValue,
  levelMaxSliderValue: state.sportunityNewActivity.levelMaxSliderValue,
  newActivityDateForServer: state.sportunityNewActivity.newActivityDateForServer,
  newActivityEndDateForServer: state.sportunityNewActivity.newActivityEndDateForServer,
  isNewActivityLoading: state.sportunityNewActivity.isNewActivityLoading,
});

const dispatchToProps = (dispatch) => ({
  changeLoadingStatus: bindActionCreators(changeLoadingStatus, dispatch),
  resetAllFields: bindActionCreators(resetAllFields, dispatch),
  showErrors: bindActionCreators(showErrors, dispatch),
});

const ReduxContainer =  connect(
  stateToProps,
  dispatchToProps
)(Validate);

export default Relay.createContainer(ReduxContainer, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        id,
        sportunities (last: 100) {
          ${SportunityPage.getFragment('sportunities')}
        }
        ${NewSportunityMutation.getFragment('viewer')}
      }
    `,
  }
});
