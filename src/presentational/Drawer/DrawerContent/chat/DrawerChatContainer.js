import React, { PropTypes, Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Relay from 'react-relay';
import RelaySubscriptions from 'relay-subscriptions';
import { AsyncStorage } from 'react-native';

import UnreadChatsSubscription from './unreadChatsSubscription';

import conf from 'sportunity/conf/constants.json';
import NetworkLayer from '../../../Router/NetworkLayer';

import { metrics, colors, fonts } from 'sportunity/src/theme';

const styles = {
  text: {
    ...fonts.style.h5,
    color: colors.charcoal,
    marginVertical: metrics.baseMargin,
    flex: 2
  },
  row:{
    flexDirection: 'row',
    flex: 1
  },
  badgeContainer:{
    height: metrics.icons.medium,
    width: metrics.icons.medium,
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center'
  },
  badge:{
    color: 'white',
    ...fonts.style.h5,
  }

};


const DrawerChat = ({ onPress, text, viewer:{me, me:{unreadChats}} }) => (
  <TouchableOpacity style={styles.row} onPress={onPress}>
    <Text style={styles.text}>{text}</Text>
    {
      me
      ?
      <View style={styles.badgeContainer}>
        <Text style={styles.badge}>{me.unreadChats}</Text>
      </View>
      :
      null
    }

  </TouchableOpacity>
);


DrawerChat.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

 const DrawerChatContainer =  RelaySubscriptions.createContainer(DrawerChat, {
  fragments: {
    viewer: () => Relay.QL`fragment on Viewer{
      ${UnreadChatsSubscription.getFragment('viewer')}
      me{
        unreadChats
      }
    }`
  },
  subscriptions: [
    ({ viewer }) => new UnreadChatsSubscription({ viewer }),
  ],
});


export default class extends Component{

  constructor(props){
    super(props);
    this.state = {
      loading: false
    }
    this.environment = new RelaySubscriptions.Environment();
  }

  componentDidMount(){

    AsyncStorage.getItem('authToken').then((token) => {
      if(token){
        config = { headers: { token: token, } };
      }
      this.environment.injectNetworkLayer(new NetworkLayer(conf.backendUrl, config));
      this.setState({loading: true})
    });
  }

  render(){
    return(
      this.state.loading ?
      <Relay.Renderer
        forceFetch={false}
        queryConfig={{
          queries: {viewer: () => Relay.QL`query { viewer }`},
          params: {},
          name: `chat_route`,
        }}
        //environment={Relay.Store}
        environment={this.environment}
        Container={DrawerChatContainer}
        render={({done, error, props, retry, stale}) => {
          if (props) {
            return <DrawerChatContainer {...props} {...this.props} />;
          } else {
            return null;
          }
        }}
      />
      :
      null
    )
  }
}
