import React, { PropTypes, Component } from 'react';
import { View } from 'react-native';
import Relay from 'react-relay';

import SportunitySummary from '../../../../../../src/customPropType/SportunitySummary';
import TopContent from './TopContent';
import BottomContent from './BottomContent';

import { styles } from './styles';
import { colors } from '../../../../../../src/theme';

/**
 * SportunityItem
 */
class SportunityItem extends Component {

  /**
   * constructor
   * @param {props}
   */
  constructor(props){
    super(props);
    this.state = {
      status: 'AVAILABLE'
    }

  }
  
  setStatusAcvity = (status) => {
    this.setState({status})
  }
  
  /**
   *
   */
  actitvityColor = () => {
    switch(this.state.status){
      case 'FULL':
        return colors.red;
      case 'WAITING':
        return colors.bloodOrange;
      case 'NEED_MORE_PARTICIPANT':
        return colors.lightGrey;
      default:
        return colors.darkGrey;
    }
  }

  getStatus = () => {
    if(this.state.status === 'NEED_MORE_PARTICIPANT')
      return 'AVAILABLE';
    else
      return this.state.status;
  }

  /**
   *
   */
  switchToPage = () => {
    this.props.onPress(this.props.sportunity, this.state.status, this.actitvityColor());
  }

  /**
   *
   */
  render(){

    const { sportunity } = this.props;
    const actitvityColor = this.actitvityColor();

    return (<View style={styles.container}>
      <View style={[styles.leftBar,{backgroundColor: actitvityColor}]} />
      <View style={styles.content}>

        <TopContent
          onPress={this.switchToPage}
          sportunity={sportunity}
          status={this.getStatus()}
          actitvityColor={actitvityColor}
        />

        <View style={styles.seperator} />
        <BottomContent 
          style={styles.bottom}
          sportunity={sportunity}
          setStatusAcvity={this.setStatusAcvity}
          actitvityColor={actitvityColor}
        />
      </View>
    </View>);
  }
}

export default Relay.createContainer(SportunityItem, {
  fragments: {
    sportunity: () => Relay.QL`
      fragment on Sportunity{
        id
        title
        ${TopContent.getFragment('sportunity')}
        ${BottomContent.getFragment('sportunity')}
      }`
  }
})

SportunityItem.propTypes = {
  //  Action to be called when the user press the item, to show more info about it.
  onPress: PropTypes.func.isRequired,
  // The item to be displayed.
  sportunity: SportunitySummary
};
