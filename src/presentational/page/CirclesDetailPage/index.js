import React, { PropTypes, Component } from 'react';
import { View, Alert } from 'react-native';
import Relay from 'react-relay';

import { ViewerRoute } from '../../../routes/ViewerRoute';
import { circleType } from '../../../customPropType';
import Button from '../../../presentational/Button/roundedButton';
import Input from '../../../presentational/Input';
import inputStyles from '../../Input/style';
import MembersView from './MembersView';
import styles from './style';

import UpdateCicleMutation from  './mutation/UpdateCicle';
import RemoveCircleMember from  './mutation/RemoveCircleMember';
import NewCircleMember from  './mutation/NewCircleMember';

class CirclesDetailPage extends Component {
  

  constructor(props) {
    super(props);
    this.state = {
      name: '',
    }

  }

  componentDidMount() {
    let {relay, id} = this.props; 
    relay.setVariables({ id });
  }

  onKeyDown = (e) => {
    if (this.props.onCancel && e.keyCode === keycode.codes.esc) {
      this.props.onCancel();
    } else if (e.keyCode === keycode.codes.enter) {
      this.update();
    }
  };


  onUpdate = () => {
    const { relay, viewer } = this.props;
    const name =  this.state.name
    
    const callback = {
      onFailure: error => console.log(error.getError()),
      onSuccess: (response) => {
        Alert.alert(
          'Info',
          'Circle update succesfull!',
          [
            {text: 'OK', onPress: () => {}},
          ]
        )
      },
    };
    const mutation = new UpdateCicleMutation({ viewer, circle: viewer.circle, name });
    if(name)
      relay.commitUpdate(mutation , callback);
    this.setState({name: ''})
  }


  addMember = (user) => {
    const { relay, viewer } = this.props;
    
    console.log("addMember", user)
    const callback = {
      onFailure: error => console.log(error.getError()),
      onSuccess: (response) => {
        Alert.alert(
          'Info',
          'new Membre succesfull!',
          [
            {text: 'OK', onPress: () => {}},
          ]
        )
      },
    };
    const mutation = new NewCircleMember({ viewer, circle: viewer.circle, user });
    relay.commitUpdate(mutation, callback);

  }

  removeMember = (user) => {
      const { relay, viewer, } = this.props;

      const callback = {
      onFailure: error => console.log(error.getError()),
      onSuccess: (response) => {
        Alert.alert(
          'Info',
          'remove Membre succesfull!',
          [
            {text: 'OK', onPress: () => {}},
          ]
        )
      },
    };
    const mutation = new RemoveCircleMember({ viewer, circle: viewer.circle, user });
    relay.commitUpdate(mutation, callback);
  }


  render() {
    const circle = this.props.viewer.circle;
    console.log('this.props.viewer', this.props.viewer)
    return (
      <View style={styles.container}>
        <Input
          styles={[inputStyles.input]}
          inputIconStyles={inputStyles.icon}
          placeholder={"Name"}
          defaultValue={circle.name}
          updateText={(name) => this.setState({name})}
        />
        { circle && <MembersView 
          removeMember={this.removeMember}
          addMember={this.addMember}
          members={circle.members} /> }
        
        <View  style={{marginVertical: 25}}>
          <Button onPress={() => this.onUpdate()}>
            UPDATE
          </Button>
        </View>
      </View>
    )
  }  
}

CirclesDetailPage.propTypes = {
  viewer: PropTypes.object.isRequired,
  onCancel: PropTypes.func,

};


export default Relay.createContainer(CirclesDetailPage, {
  initialVariables: {
    id: ''
  },
  fragments: {
    viewer: () => Relay.QL`
    fragment on Viewer{
      id,
      circle(id: $id) {
        id
        name
        owner
        members{
          id,
          pseudo,
          email,
          firstName,
          lastName,
          ${RemoveCircleMember.getFragment('user')}
        },
        ${UpdateCicleMutation.getFragment('circle')}
        ${NewCircleMember.getFragment('circle')}
      }
      ${UpdateCicleMutation.getFragment('viewer')}
      ${RemoveCircleMember.getFragment('viewer')}
      ${NewCircleMember.getFragment('viewer')}
    }`
  }
});
