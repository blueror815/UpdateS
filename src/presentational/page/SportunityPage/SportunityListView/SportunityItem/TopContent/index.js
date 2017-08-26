import React, { PropTypes } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Relay from 'react-relay';
import moment from 'moment';

import icons from '../../../../../../../src/theme/images';
import { styles } from './styles';
import Levels from './levels';
import { SportunitySummary } from '../../../../../../../src/customPropType';

const TopContent = ({ onPress, sportunity:{beginning_date, sport, address, price, title}, actitvityColor, status }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.row}>
      <Text style={[styles.status,{color: actitvityColor}]}>
        {status}
      </Text>
      <View style={styles.datetimeContainer}>
        <Text style={styles.datetime}>
          {moment(beginning_date).format('MMM DD.MM.YY LT')}
        </Text>
      </View>
    </View>
    <View style={[styles.row, styles.row2]}>
      <View style={styles.imageContainer}>
        <Image style={styles.icon} source={icons.shoes} />
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.row}>
          <Text style={styles.title} numberOfLines={1}>{title}</Text>
        </View>
        <View style={styles.row}>
          <Levels levels={sport.levels} />
        </View>
        <View style={styles.row}>
          <Image style={styles.iconLocation} source={icons.location} />
          <Text style={styles.location}>
            {`${address.zip} ${address.city}, ${address.country}`}
          </Text>
        </View>
      </View>
      <View style={styles.priceContainer}>
        {
          price &&
          <Text style={styles.price}>{`${price.cents} ${price.currency}`}</Text>
        }
      </View>
    </View>
    <View style={styles.ellipseContainer}>
      <Image style={styles.ellipseBar} source={icons.ellipse_bar} />
    </View>
  </TouchableOpacity>
);

TopContent.propTypes = {
  onPress: PropTypes.func.isRequired,

  sportunity: SportunitySummary,
  actitvityColor: PropTypes.string.isRequired,

};

export default Relay.createContainer(TopContent, {
  fragments: {
    sportunity: () => Relay.QL`
    fragment on Sportunity{
      id,
      title,
      beginning_date,
      price {
        currency
        cents
      },
      address {
        country
        city
        zip
        position {
          lat
          lng
        }
      },
      sport {
        id,
        levels{
          EN {
            name
          }
        }
        logo,
      }
    }`
  }
})
