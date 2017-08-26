import React, { PropTypes, Component} from 'react';
import { connect } from 'react-redux';
import Relay from 'react-relay';
import { View, Platform } from 'react-native';

import styles from './style';
import MessagesList from './MessagesList';
import UsersList from './UsersList';
import UserItem from './UsersList/UserItem';

/**
 * ChatView
 */
class ChatView extends Component {
  /**
   * 
   */
  constructor(props){
    super(props);
    this.state = {
      title: null,
      image: null,
      status: 'Not connected'
    };
  }

  
  /**
   * 
   */
  componentWillMount() {
    this.setState({
      users: this.props.chat.users
    });
  }

  /**
   * 
   */
  render(){

    return (
      this.props.chat && <View style={styles.container}>
        {this.props.chat.sportunity != null && <UsersList users={this.state.users} />}
        <MessagesList chat={this.props.chat} viewer={this.props.viewer} />
      </View>
    );
  }
}

ChatView.propTypes = {
  chat: PropTypes.object.isRequired,
  viewer: PropTypes.object.isRequired,
}


const ChatViewContainer =  Relay.createContainer(ChatView, {
  fragments: {
    chat: () => Relay.QL`fragment on Chat{
      id,
      users{
        ${UserItem.getFragment('user')}
      },
      sportunity{
        id
      },
      ${MessagesList.getFragment('chat')}
    }`,
    viewer: () => Relay.QL`fragment on Viewer{
      ${MessagesList.getFragment('viewer')}
    }`
  }
})

export default ChatViewContainer;

