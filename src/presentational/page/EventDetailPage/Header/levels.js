import React, { PropTypes } from 'react';
import Relay from 'react-relay';
import { Text, View, } from 'react-native';
import { styles } from './styles';

const Levels = ({ sport:{levels} }) => (
  <View style={styles.column}>
  { 
    levels && 
    (levels.length > 2) ?
      <View style={styles.levelContainer}>
        {<Text style={styles.headerTxtDescTop}>{levels[0].EN.name}</Text>}
        {<Text style={styles.headerTxtDescTop}>to</Text>}
        {<Text style={styles.headerTxtDescTop}>{levels[levels.length-1].EN.name}</Text>}
      </View>
    :
    levels.map((level, key) => level.EN && <Text key={key}  style={styles.headerTxtDescTop}>{level.EN.name}</Text>)
  }
  </View>
  
)

Levels.propTypes = {
  sport: PropTypes.object.isRequired,
}

export default  Relay.createContainer(Levels, {
  fragments: {
    sport: () => Relay.QL`fragment on Sport{
      id,
      levels{
        EN {
          name
        }
      }
    }`
  }
});