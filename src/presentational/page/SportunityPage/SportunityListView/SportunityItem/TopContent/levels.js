import React, { PropTypes } from 'react';
import { Text, View, } from 'react-native';
import { styles } from './styles';

const Levels = ({ levels }) => (
  <View style={{flex: 1, flexDirection: 'row',}}>
  {
    (levels.length > 2) ?
      <View style={{flex: 1, flexDirection: 'row',}}>
        {<Text style={styles.level}>{levels[0].EN.name}</Text>}
        {<Text style={styles.to}>to</Text>}
        {<Text style={styles.level}>{levels[levels.length-1].EN.name}</Text>}
      </View>
    :
    levels && levels.map((level, key) =>  level.EN && <Text key={key}  style={styles.level}>{level.EN.name}</Text>)
  }
  </View>
  
)

Levels.propTypes = {
  levels: PropTypes.array.isRequired,
}

export default Levels;
