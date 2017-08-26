import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';

import Accordion from './Accordion';
import { userType } from '../../../../../src/customPropType';

class MembersView extends Component {
    
  render(){
    return (
      <View>
        <Accordion 
          title={`${this.props.members.length} in a circles`}
          members={this.props.members}
          removeMember={this.props.removeMember}
          addMember={this.props.addMember}
          collapsed={false}
        />
      </View>
    );
  }
}

MembersView.propTypes = {
  members: React.PropTypes.arrayOf(userType).isRequired
};

export default MembersView;
