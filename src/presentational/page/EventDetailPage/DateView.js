import React,{ PropTypes } from 'react';
import Relay from 'react-relay';
import { View, Text, Image, } from 'react-native';
import moment from 'moment';

import { styles } from './styles';
import icons from '../../../../src/theme/images';

const DateSportunity = ({sportunity:{beginning_date, ending_date}}) => (
  <View style={styles.rowMargin}>
    <Image
      style={{ width: 20, height: 20 }}
      source={icons.tenis}
    />
    <View style={styles.seperator} />
    <Text style={styles.dateDesc} numberOfLines={3}>
      {moment(beginning_date).format('ddd D MMM')} from {moment(beginning_date).format('hh-mm')} to {moment(ending_date).format('hh-mm')}</Text>
  </View>
);

DateSportunity.propTypes = {
  sportunity: PropTypes.object.isRequired,
};

export default  Relay.createContainer(DateSportunity, {
  fragments: {
    sportunity: () => Relay.QL`fragment on Sportunity{
      beginning_date
      ending_date
    }`
  }
});