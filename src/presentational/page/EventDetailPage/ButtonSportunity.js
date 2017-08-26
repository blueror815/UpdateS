import React,{ PropTypes, Component, } from 'react';
import Relay from 'react-relay';
import { Alert, } from 'react-native';
import { Actions, } from 'react-native-router-flux';

import Button from '../../../presentational/Button/roundedButton';
import UpdateSportunity from './mutation/UpdateSportunity';

class ButtonSportunity extends Component{

  constructor(props) {
    super(props);
    this.state = {
      name: '',
    }
  }
  
  

  BookOrCandelSportunity  = () => {
    const { isParticipant, isLoggedIn, } = this.props;
    if(isLoggedIn){
      if(isParticipant){
        Alert.alert(
          'Warning',
          'Are you sure to cancel sportunity ?',
          [
            {text: 'YES', onPress: () => this.update('add')},
            {text: 'No', onPress: () => {}},
          ]
        )
      }
      else{
        Alert.alert(
          'Warning',
          'Do you want book this sportunity ?',
          [
            {text: 'YES', onPress: () => this.update('cancel')},
            {text: 'No', onPress: () => {}},
          ]
        )
      }
    }
    else{
      Actions.settings({message: 'Connexion requested to book a sportunity'})
    }
  }

  update(type) {
    const {viewer, user, sportunity} = this.props;
    
    const callback = {
      onFailure: error => console.log(error.getError()),
      onSuccess: (response) => {
        Alert.alert(
          'Info',
          type === 'add' ? 'succesfully add particpant!' : 'succesfully cancel particpant!',
          [
            {text: 'OK', onPress: () => {}},
          ]
        )
      },
    };
    

    const mutation = type === 'add' ? new UpdateSportunity({ viewer, sportunity, user }) : new UpdateSportunity({ viewer, sportunity, user });
    this.props.relay.commitUpdate(mutation, callback);
  }



  render() {
    const {isParticipant, isOrganized} = this.props;
    return (
      !isOrganized ?
      <Button onPress={() => this.BookOrCandelSportunity()}>
        {isParticipant ? "Cancel participation" : "Book"}
      </Button>
      :
      null
    )
  }

  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    isParticipant: PropTypes.bool.isRequired
  };
}


ButtonSportunity.propTypes = {
  viewer: React.PropTypes.object.isRequired,
  relay: React.PropTypes.object.isRequired
};


/**
*  RELAY CREATE CONTAINER 
*/
export default Relay.createContainer(ButtonSportunity, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        id
        ${UpdateSportunity.getFragment('viewer')}
      }
    `,
    user: () => Relay.QL`
      fragment on User {
        id
        ${UpdateSportunity.getFragment('user')}
      }
    `,
    sportunity: () => Relay.QL`
      fragment on Sportunity {
        id
        ${UpdateSportunity.getFragment('sportunity')}
      }
    `,
  }
});