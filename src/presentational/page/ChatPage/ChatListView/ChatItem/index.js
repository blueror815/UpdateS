import React, { PropTypes } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import moment from 'moment';
import Relay from 'react-relay';

import { messageType } from '../../../../../customPropType';
import { styles } from './style';
import { images } from '../../../../../theme';
import Message from '../Message';

const ChatItem  = ({ chat:{messages, sportunity}, goToChat, chat }) => (
  messages && messages.edges[0] ?
  <View style={styles.markerOverlayContainer}>
    <TouchableOpacity style={styles.container} onPress={() => goToChat(chat)}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image style={styles.icon} source={images.shoes} />
        </View>
        <Message message={messages.edges[0].node} sportunity={sportunity} />
        <View style={styles.ellipseContainer}>
          <Image style={styles.ellipseBar} source={images.ellipse_bar} />
        </View>
      </View>
    </TouchableOpacity>
  </View>
  :
  null
);

ChatItem.propTypes = {
  chat: PropTypes.object.isRequired,
  id: PropTypes.number,
  goToChat: PropTypes.func.isRequired
};


export default  Relay.createContainer(ChatItem, {
  initialVariables: {
    countMessage: 1
  },
  fragments: {
    chat: () => Relay.QL`
      fragment on Chat{
        id,
        sportunity{
          id
          title
        },
        messages(last: $countMessage){
          edges {
            node {
              ${Message.getFragment('message')}
            }
          }
        }
      }`
  }
})
