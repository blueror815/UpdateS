
import React,{ PropTypes } from 'react';
import Relay from 'react-relay';
import { View, Text, Image, } from 'react-native';

import icons from '../../../../theme/images';
import SportunitySummary from '../../../../customPropType/SportunitySummary';
import { styles } from './styles';
import Levels from './levels';

const Header = ({ sportunity:{ sport, participants, participantRange, nbLikes, nbShares }}) => (
  <View style={styles.header}>
    <View style={styles.headerTop}>
      <View style={styles.headerTxtDesc}>
        <Text style={styles.headerTxtDescTop}>Level(s):</Text>
        <Levels sport={sport} />
      </View>
      <Image style={styles.headerImage} source={icons.tenis} />
      <View style={styles.headerTxtDesc}>
        <Text style={styles.headerTxtDescTop}>Participants:</Text>
        <Text style={styles.headerTxtDescBottom}>{participants.length} at {participantRange.to}</Text>
      </View>
    </View>
    <View style={styles.headerBottom}>
      <View style={styles.hbContainer}>
        <Image
          style={styles.hblIcon}
          source={icons.y_heart}
        />
        <View style={styles.seperator} />
        <Text style={styles.hblTxt}>{nbLikes}</Text>
      </View>
      <View style={styles.hbContainer}>
        <Text style={styles.hblTxt}>{nbShares}</Text>
        <View style={styles.seperator} />
        <Image
          style={styles.hblIcon}
          source={icons.w_share}
        />
      </View>
    </View>
  </View>
)

Header.propTypes = {
  sportunity: SportunitySummary.isRequired
};

export default  Relay.createContainer(Header, {
  fragments: {
    sportunity: () => Relay.QL`fragment on Sportunity{
      sport{
        ${Levels.getFragment('sport')}
      }
      participants{
        id
      }
      participantRange{
        to
      }
      nbLikes
      nbShares
    }`
  }
});
