import React, { PropTypes } from 'react';
import Relay from 'react-relay';
import RelaySubscriptions from 'relay-subscriptions';
import { View } from 'react-native';
import { connect } from 'react-redux';

import AddMessageMutation from '../ChatDetailPage/mutation/AddMessage';
import AddMessageSubscription from '../ChatDetailPage/subscription/AddMessage';
import ChatListView from './ChatListView';
import style from './style';

const ChatPage = ({ viewer:{chats}}) => {
  return (
  	<View style={style.container}>
  	  <ChatListView chats={chats} />
  	</View>
  );	
};

ChatPage.propTypes = {
  viewer: PropTypes.object
};

export default ChatPageContainer =  RelaySubscriptions.createContainer(ChatPage, {
  initialVariables: {
    countMessage: 1,
    count: 10
  },
  fragments: {

    
    viewer: () => Relay.QL`fragment on Viewer{
      ${AddMessageSubscription.getFragment('viewer')}
      ${AddMessageMutation.getFragment('viewer')}
      chats(last: $count){
        ${ChatListView.getFragment('chats')}
      }
    }`
  },
  // We need AddMessageSubscription in Server 
  subscriptions: [
    ({ viewer }) => new AddMessageSubscription({ viewer }),
  ],
});



