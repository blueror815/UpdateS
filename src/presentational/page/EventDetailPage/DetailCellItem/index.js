import React from 'react';
import Relay from 'react-relay';
import {Text, View, Image, TouchableOpacity} from 'react-native';

import icons from '../../../../../src/theme/images';
import { styles } from './styles';
import { addressType } from '../../../../customPropType';

const DetailCellItem = ({address, venue}) => (

  <TouchableOpacity style={styles.container}>
    
      {
        venue 
        ?
        <View style={styles.row}>
          <View style={styles.imageContainer}>
            <Image style={styles.thumb} source={icons.stadium} />
          </View>
          <View style={styles.detailContainer}>
            <View style={styles.row}>
              <Text style={styles.title} numberOfLines={1}>
                {venue.name} 
              </Text>
              <Image style={[styles.iconLocation,styles.iconDarkBlue]} source={icons.location} />
            </View>
            <View style={styles.row}>
            {
              venue.infrastructures.map((inf, key) => inf.sport.name && <Text key={key} style={styles.level}>{inf.sport.name.EN}</Text>)
            }
            </View>
            <View style={styles.rowBottom}>
              <Image style={styles.iconLocation} source={icons.activities} />
              <Text style={styles.location}>{venue.infrastructures.length}</Text>
              <View style={styles.w_seperator} />
              <Image style={styles.iconLocation} source={icons.favourite} />
              <Text style={styles.location}>{venue.feedbacks.count}</Text>
            </View>
          </View>
        </View>
        :
        <View style={styles.detailContainer}>
          <View style={styles.row}>
            <Text style={styles.title} numberOfLines={1}>
            { address && `${address.zip} ${address.city}, ${address.country}` }
            </Text>
          </View>
        </View>

      }
      
  </TouchableOpacity>

);

DetailCellItem.propTypes = {
  address: addressType
};

export default  Relay.createContainer(DetailCellItem, {
  fragments: {
    address: () => Relay.QL`fragment on AddressModel{
      zip
      city
      country
      position{
        lat 
        lng
      }
    }`,
    venue: () => Relay.QL`fragment on Venue{
      feedbacks{
        count
      }
      id
      name
      infrastructures{
        id
        sport{name{EN}}
      }
    }`,
    
  }
});

