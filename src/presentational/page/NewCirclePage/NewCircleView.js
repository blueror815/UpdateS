import React, { PropTypes, Component } from 'react';
import { View, Alert, } from 'react-native';
import Relay from 'react-relay';
import { Actions } from 'react-native-router-flux';

import NewCircleMutation from './NewCircleMutation';
import Button from '../../Button/roundedButton';
import Input from '../../Input';
import styles from './styles';


class NewCircleView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    }
  }

  new() {
    const viewer = this.props.viewer
    console.log('viewer.id', viewer.id);
    if(this.state.name != ""){
      this.props.relay.commitUpdate(
        new NewCircleMutation({
          viewer,
          name: this.state.name
        }),
        {
          onFailure: error => console.log(error.getError()),
          onSuccess: (response) => {
            Alert.alert(
              'Info',
              'Circle creation succesfull!',
              [
                {text: 'OK', onPress: () => Actions.pop()},
              ]
            )
          },
        }
      )
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Input
          updateText={(name) => this.setState({name})}
          placeholder={"Name"}
        />
        <Button onPress={() => this.new()}>
           NEW CIRCLE
        </Button>
      </View>
    )
  }  
}

NewCircleView.propTypes = {
  viewer: React.PropTypes.object.isRequired,
  relay: React.PropTypes.object.isRequired
};


/**
*  RELAY CREATE CONTAINER 
*/
export default Relay.createContainer(NewCircleView, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        id
        ${NewCircleMutation.getFragment('viewer')}
      }
    `,
  }
});
