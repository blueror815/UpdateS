import React, { PropTypes, Component} from 'react';
import Relay from 'react-relay';
import { View } from 'react-native';


import AddMessageSubscription from './subscription/AddMessage';
import AddMessageMutation from './mutation/AddMessage';
//import ReadChatMutation from './mutation/ReadChat';

import ChatDetailPage from './ChatDetailPage';

class ChatView extends Component{

  componentDidMount() {
    let {relay, id} = this.props; 
    relay.setVariables({ id });
  }
  
  render() {
    const {viewer, viewer:{chat, me}} = this.props;
    return <ChatDetailPage viewer={viewer} chat={chat} me={me} />;
  }
}


export const ChatUserContainer =  Relay.createContainer(ChatView, {
  initialVariables: {
    id: ''
  },
  fragments: {
    viewer: () => Relay.QL`fragment on Viewer{
      ${ChatDetailPage.getFragment('viewer')}
      chat (userId: $id) {
        ${ChatDetailPage.getFragment('chat')}
      }
    }`
  },
  subscriptions: [
    ({ viewer }) => new AddMessageSubscription({ viewer }),
  ],
});

export const ChatSportunityContainer =  Relay.createContainer(ChatView, {
  initialVariables: {
    id: ''
  },
  fragments: {
    viewer: () => Relay.QL`fragment on Viewer{
      ${ChatDetailPage.getFragment('viewer')}
      chat (sportunityId: $id) {
        ${ChatDetailPage.getFragment('chat')}
      }
    }`
  },
  subscriptions: [
    ({ viewer }) => new AddMessageSubscription({ viewer }),
  ],
});

export const ChatContainer =  Relay.createContainer(ChatView, {
  initialVariables: {
    id: ''
  },
  fragments: {
    viewer: () => Relay.QL`fragment on Viewer{
      ${ChatDetailPage.getFragment('viewer')}
      chat (id: $id) {
        ${ChatDetailPage.getFragment('chat')}
      }
    }`
  },
  subscriptions: [
    ({ viewer }) => new AddMessageSubscription({ viewer }),
  ],
});