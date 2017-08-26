import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, Animatable } from 'react-native';
import Relay from 'react-relay';

import Accordion from './Accordion';
import ParticipantItem from './ParticipantItem';

import { images } from '../../../../../src/theme';
import { userType } from '../../../../../src/customPropType';

import styles from './style';


class ParticipantsList extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      activeSection: 1,
    }
    this.onChange = this.onChange.bind(this);
  }
  
  onChange(key){
    this.setState({activeSection: key});
  }

  renderAccordion(index, title, users){
    return (
      <Accordion 
        collapsed={index !== this.state.activeSection} 
        users={users} 
        title={title}
        index={index}
        onChange={this.onChange} />
    );
  }

  render(){
    const {participants, waiting, canceling} = this.props.sportunity;

    return (
      <ScrollView style={styles.background}>
        {this.renderAccordion(1, "Going Participants", participants)}
        {this.renderAccordion(2, "Waiting list", waiting)}
        {this.renderAccordion(3, "Not Available", canceling)}
      </ScrollView>
    )
  }
}

ParticipantsList.propTypes = {
  sportunity: React.PropTypes.object.isRequired,
};


export default  Relay.createContainer(ParticipantsList, {
  fragments: {
    sportunity: () => Relay.QL`fragment on Sportunity{
      participants{
        ${ParticipantItem.getFragment('user')}
      }
      waiting{
        ${ParticipantItem.getFragment('user')}
      }
      canceling{
        ${ParticipantItem.getFragment('user')}
      }
    }`
  }
});
