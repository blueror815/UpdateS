import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';

import Collapsible from 'react-native-collapsible';


import { images } from '../../../../theme';
import { userType } from '../../../../customPropType';
import SportunityAccordion from '../../../SportunityAccordion';

import styles from './style';
import ParticipantItem from './ParticipantItem';

class Accordion extends Component {
  
  constructor(props){
    super(props);

    this.renderHeader = this.renderHeader.bind(this);

  }
  
  renderHeader() {
    const {title, users} = this.props;
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>
          {title}
        </Text>
        <Text style={styles.numberText}>
          {users.length}
        </Text>
        <Image
          style={styles.headerIcon}
          source={images.down_arrow}
        />
      </View>
  	)
  }

  onChange(){
    this.props.onChange(this.props.index);
  }


  render(){
    const {users, title, onChange, index, collapsed}  = this.props;

    return (
      <SportunityAccordion
        renderHeader={this.renderHeader}
        collapsed={collapsed}
        onChange={this.onChange.bind(this)}
      >
        { users && users.map((item, index) => 
            <ParticipantItem key={index} user={item} />
          )
        }
      </SportunityAccordion>
    )
  }
}

Accordion.propTypes = {
  users: React.PropTypes.arrayOf(userType),
  onChange: React.PropTypes.func.isRequired,
  collapsed: React.PropTypes.bool.isRequired,
  index: React.PropTypes.number.isRequired
};

export default Accordion;
