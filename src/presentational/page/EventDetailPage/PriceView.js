import React,{ PropTypes } from 'react';
import Relay from 'react-relay';
import { View, Text, } from 'react-native';
import { styles } from './styles';

const Price = ({price}) => (
  <View>
    <View style={styles.seperator} />
    <View style={styles.rowMargin}>
      <Text style={styles.title} numberOfLines={1}>
        Price
      </Text>
      <View style={styles.right_column}>
        <Text style={styles.price}>
          {price && `${price.cents} ${price.currency}`}
        </Text>
      </View>
    </View>
  </View>
);

Price.propTypes = {
  price: PropTypes.object,
};

export default  Relay.createContainer(Price, {
  fragments: {
    price: () => Relay.QL`fragment on Price{
      currency
      cents
    }`
  }
});

