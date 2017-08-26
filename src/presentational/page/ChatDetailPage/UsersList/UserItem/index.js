import React from 'react';
import { View, Image, Text } from 'react-native';
import Relay from 'react-relay';
import styles from './style';
import images from '../../../../../theme/images';
import AddMessageMutation from '../../mutation/AddMessage';

const UserItem = ({user:{avatar, pseudo}}) =>
  <View style={styles.photoContainer}>
    {avatar ?
     <Image style={styles.thumbProfile} source={{uri: avatar}} />
     :
     <Image style={styles.thumbProfile} source={images.profile_photo} />
    }
    <View style={styles.nameProfile}>
      <Text numberOfLines={1}>{pseudo}</Text>
    </View>
  </View>  
;

UserItem.propTypes = {
  user: React.PropTypes.object.isRequired,
};


export default  Relay.createContainer(UserItem, {
  fragments: {
    user: () => Relay.QL`
    fragment on User{
      id,
      pseudo,
      avatar
      ${AddMessageMutation.getFragment('user')}
    }`
  }
})
