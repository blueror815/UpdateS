import React, { PropTypes } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import moment from 'moment';
import Relay from 'react-relay';

import { messageType } from '../../../../../customPropType';
import { styles } from './style';
import { images } from '../../../../../theme';



const Message = ({sportunity, message:{text, author, created}}) => (
  <View style={styles.col}>
    <View style={styles.row}>
      <Text style={styles.title} numberOfLines={1}>
        {sportunity && sportunity.title}
      </Text>
      <View style={styles.datetimeContainer}>
        <Text style={styles.datetime}>
          {moment(created).format('ddd l LT')}
        </Text>
      </View>
    </View>
    <View style={styles.row}>
      <View style={styles.detailContainer}>
        <View style={styles.row}>
          <Text style={styles.subtitle} numberOfLines={1}>{author && author.pseudo}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.message}>{text}</Text>
        </View>
      </View>
    </View>
  </View>
)

Message.propTypes = {
  message: messageType.isRequired,
  sportunity: PropTypes.object,
};


const MessageContainer =  Relay.createContainer(Message, {
  fragments: {
    message: () => Relay.QL`
      fragment on Message{
        id,
        text,
        author {
          id,
          firstName,
          lastName,
          pseudo
        },
        created
      }`
  }
})

export default MessageContainer;
