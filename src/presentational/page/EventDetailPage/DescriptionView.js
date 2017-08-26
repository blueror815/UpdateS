import React,{ PropTypes } from 'react';
import Relay from 'react-relay';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const Description = ({sportunity:{description}}) => (
  <TouchableOpacity style={styles.rowContainer}>
    <View style={{flex:1,flexDirection: 'row'}}>
      <View style={{flex:2}}>
        <Text style={styles.title} numberOfLines={3}>
          Description
        </Text>
      </View>
      <View style={styles.descContainer}>
        <Text style={styles.desc} numberOfLines={3}>
          {description}
        </Text>
      </View>
    </View>
    
  </TouchableOpacity>
);

Description.propTypes = {
  sportunity: PropTypes.object.isRequired,
};


export default  Relay.createContainer(Description, {
  fragments: {
    sportunity: () => Relay.QL`fragment on Sportunity{
      description
    }`
  }
});

