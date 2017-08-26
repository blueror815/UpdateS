import React, { Component, PropTypes } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import Relay from 'react-relay';

import AddMessageSubscription from '../subscription/AddMessage';
import AddMessageMutation from '../mutation/AddMessage';
import ReadChatMutation from '../mutation/ReadChat';


/**
 *
 */

class MessagesList extends Component {
  /**
   *
   */
  constructor(props) {
    super(props);
    
    const user = this.props.viewer.me;
    
    this.state = {
      messages: [],
      localMessage: false,
      readMessage: false,
      numberReceiveProps: 1,
      user:{
        _id: user.id,
        name: user.pseudo,
        avatar: user.avatar,
      }
    };
    
  }

  componentDidMount(){
    this.loadMessages();
  }

  componentWillMount() {
    this.readChat();
  }

  componentWillUnMount() {
    this.readChat();
  }

  readChat = () => {
    const {relay, viewer, chat} = this.props;

    relay.commitUpdate(
      new ReadChatMutation({ viewer, chat }),
      {
        onFailure: error => console.log(error.getError()),
        onSuccess: (response) => {
          //console.log(response)
        },
      }
    );
  }

  componentWillReceiveProps(nextProps){

    if(!this.state.readMessage){
      this.setState({readMessage: true})
      return;
    }

    const length = nextProps.chat.messages.edges.length;
    const nextMessage = nextProps.chat.messages.edges[length-1];

    const message = this.renderMessage(nextMessage);
    

    
    if(!this.state.localMessage){
      this.setState((previousState) => {
        return {
          messages: GiftedChat.append(previousState.messages, [message]),
        };
      });
    }
    else{
      if(this.state.numberReceiveProps === 3){
        this.setState({numberReceiveProps: 1, localMessage: false})
      }
      else{
        this.setState({numberReceiveProps: this.state.numberReceiveProps+1})
      }
    }
    
  }
  
  renderMessage = (item) => {
    return {
      _id: item.node.id,
      text: item.node.text,
      createdAt: new Date(item.node.created),
      user: {
        _id: item.node.author && item.node.author.id,
        name: item.node.author &&  item.node.author.pseudo,
        avatar: item.node.author &&  item.node.author.avatar,
      }  
    }

  }
  /**
   * change structure message
   */
  loadMessages = () => {

    const messages = this.props.chat.messages;
    const newMessages = messages ? 
      messages.edges.reverse().map((item) => (this.renderMessage(item)))
      :
      [];
    
    this.setState({messages: newMessages, length: newMessages.length });
  }

  /**
   *
   */
  onSend = (messages) => {
    
    this.props.onSend(messages[0].text);
    
  }

  /**
   *
   */
  onSend = (messages) => {
    const {relay, chat, user, viewer} = this.props;
    
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
        localMessage: true
      };
    });
    

    relay.commitUpdate(
      new AddMessageMutation({ viewer, chat, user: viewer.me , text: messages[0].text }),
      {
        onFailure: error => console.log(error.getError()),
        onSuccess: (response) => {
          //console.log(response)
        },
      }
    );
  }

  /**
   *
   */
  render(){

    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend}
        user={this.state.user}
      />
    );
  }
    
}

MessagesList.propTypes = {
  chat: PropTypes.object.isRequired,
  viewer: PropTypes.object.isRequired,
}

export default  Relay.createContainer(MessagesList, {
  initialVariables: {
    countMessage: 20
  },
  fragments: {
    chat: () => Relay.QL`fragment on Chat{
      ${AddMessageMutation.getFragment('chat')}
      ${ReadChatMutation.getFragment('chat')}
      id,
      messages(last: $countMessage){
        edges {
          node {
            id,
            text,
            author {
              id,
              firstName,
              lastName,
              pseudo
            },
            created
          }
        }
      }
    }`,
    viewer: () => Relay.QL`fragment on Viewer{
        ${ReadChatMutation.getFragment('viewer')}
        ${AddMessageMutation.getFragment('viewer')}
        ${AddMessageSubscription.getFragment('viewer')}
        me{
          id
          pseudo
          avatar
          ${AddMessageMutation.getFragment('user')}
        }
      }`
    },
  })
