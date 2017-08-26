import React,{ PropTypes } from 'react';
import Relay from 'react-relay';
import { View, Text, Image, } from 'react-native';
import { styles } from './styles';
import icons from '../../../../src/theme/images';

const Status = ({status, sportunity:{participantRange}}) => {
  console.log('participantRange', participantRange)
  return (
  <View style={styles.rowContainer}>
    <View style={{ flexDirection: 'row', flex: 1 }}>
      <Text style={[styles.participant, {color: status.color}]}>
        Minimum number of participants
      </Text>
      <View style={styles.right_column}>
        <Text style={[styles.numberParticipant, {color: status.color}]}>
          {participantRange && participantRange.from}
        </Text>
      </View>
      <Image style={[styles.icon, {tintColor: status.color}]} source={icons.red_user} />
    </View>
  </View>
);
}

Status.propTypes = {
  status: PropTypes.object.isRequired,
  sportunity: PropTypes.object.isRequired,
};

export default  Relay.createContainer(Status, {
  fragments: {
    sportunity: () => Relay.QL`
      fragment on Sportunity{
        participantRange{
          from
        }
      }`
  }
});