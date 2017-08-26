import React, {Component} from 'react';
import { Text, View, Image } from 'react-native';
import Relay from 'react-relay';

import { rangeType, userType, SportunitySummary } from '../../../../../../customPropType';
import icons from '../../../../../../theme/images';
import { styles } from './styles';


/**
 * SportunityItem
 */
class BottomContent extends Component {

  /**
   * constructor
   * @param {props}
   */
  constructor(props){
    super(props);
  }

  /**
   *
   */
  componentDidMount(){
    this.setStatusActivity();
  }
  
  /**
   *
   */
  setStatusActivity(){

    const { sportunity: { participantRange, waiting, participants }} = this.props;
    let status = 'AVAILABLE';
    
    if(participantRange.from >  participants.length)
      status = 'NEED_MORE_PARTICIPANT';
    else if(participants.length + waiting.length > participantRange.to )
      status = 'WAITING';
    else if(participantRange.to ===  participants.length)
      status = 'FULL';
    
    console.log("Activity", participantRange, participants.length , waiting.length, status);
    this.props.setStatusAcvity(status);

  }


  render(){
    const {sportunity:{nbLikes, participantRange, participants, waiting}, actitvityColor} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.column}>
          <Image style={[styles.user_icon,{tintColor: actitvityColor}]} source={icons.red_user} />
          <Text style={[styles.info,{ color: actitvityColor}]}>min {participantRange.from} | max {participantRange.to} |  now {participants.length+waiting.length}</Text>
        </View>
        <View style={styles.right_column}>
          <Image style={styles.icon} source={icons.share} />
          <Text style={styles.count}>{participants.length}</Text>
          <Image style={styles.right_icon} source={icons.favourite} />
          <Text style={styles.count}>{nbLikes}</Text>
        </View>
      </View>
    )
  }
}

BottomContent.propTypes = {
  sportunity: SportunitySummary,
  actitvityColor: React.PropTypes.string.isRequired,
  setStatusAcvity: React.PropTypes.func.isRequired,

};

export default Relay.createContainer(BottomContent, {
  fragments: {
    sportunity: () => Relay.QL`
    fragment on Sportunity{
      nbLikes,
      nbShares,
      participants{
        id
      },
      waiting{
        id
      },
      participantRange{
        from
        to
      }
    }`
  }
})
