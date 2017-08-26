import React, { PropTypes, Component } from 'react';
import { View, ScrollView, RefreshControl } from 'react-native';
import Relay from 'react-relay';
import { connect } from 'react-redux';
import { Actions as NavigationActions } from 'react-native-router-flux';

import {  colors } from 'sportunity/src/theme';

import ChatItem from './ChatItem';
import AddMessageMutation from '../../ChatDetailPage/mutation/AddMessage';

/**
 * TODO Render it properly
 */
class ChatListView extends Component{

  constructor(props) { 
    super(props); 
    this.state = { 
      isRefreshing: false,
    };
    this._onRefresh = this._onRefresh.bind(this);
  }

  _onRefresh = () => { 
    this.setState({isRefreshing: true}); 
    setTimeout(() => {
      this.setState({ isRefreshing: false,});
      //this.props.updateCountLastChat(this.props.count+10);
    }, 5000); 
  }
  
  /**
   *
   */
  goToChat(chat){
    const title = chat.sportunity ? chat.sportunity.title : "chat";
    NavigationActions.chatdetail({ id: chat.id, title: title});
  }

  /**
   *
   */
  render(){
    const chats  = this.props.chats.edges;
    return (
      <ScrollView
        refreshControl={ <RefreshControl 
          refreshing={this.state.isRefreshing} 
          onRefresh={this._onRefresh} 
          tintColor={colors.blue}
          title="Loading..." 
          titleColor={colors.blue}
          colors={['#ff0000', colors.skyBlue, colors.darkBlue]} 
          progressBackgroundColor={colors.darkBlue} /> 
        }
      >
        { chats && chats.reverse().map((chat, index) => (
            <ChatItem 
              key={index}
              goToChat={this.goToChat}
              chat={chat.node}
            />
          ))
        }
      </ScrollView>
    );

  }
}

ChatListView.propTypes = {
  chats: PropTypes.object.isRequired,
};

const ChatListViewContainer =  Relay.createContainer(ChatListView, {
  initialVariables: {
    countMessage: 1
  },
  fragments: {
    chats: () => Relay.QL`fragment on ChatConnection{
      edges{
        node{
          ${ChatItem.getFragment('chat')}
        }
      }
    }`
  }
})

export default ChatListViewContainer;
