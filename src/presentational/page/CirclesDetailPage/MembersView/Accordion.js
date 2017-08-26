import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';

import Collapsible from 'react-native-collapsible';


import { images } from '../../../../theme';
import { userType } from '../../../../customPropType';
import SportunityAccordion from '../../../SportunityAccordion';

import styles from './style';
import MemberItem from './MemberItem';
import Add from '../Add';
class MembersView extends Component {
  
  constructor(props){
    super(props);

    this.renderHeader = this.renderHeader.bind(this);
  }
  
  renderHeader() {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>
          {this.props.title}
        </Text>
        <Image
          style={styles.headerIcon}
          source={images.down_arrow}
        />
      </View>
  	)
  }


  render(){

    return (
      <SportunityAccordion
        renderHeader={this.renderHeader}
        collapsed={this.props.collapsed}
      >
        { this.props.members && this.props.members.map((item, index) => 
            <MemberItem key={index} user={item} removeMember={this.props.removeMember} />
          )
        }
        <Add addMember={this.props.addMember} />
      </SportunityAccordion>
    )
  }
}

MembersView.propTypes = {
  members: React.PropTypes.arrayOf(userType),
  removeMember: React.PropTypes.func
};

export default MembersView;
