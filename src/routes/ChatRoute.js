import Relay from 'react-relay';


export default class ChatRoute extends Relay.Route {
  static routeName = 'ChatRoute';
  static paramDefinitions = {
    id: {required: true},
  };
  

  static queries = {
    viewer: (Component, vars) => Relay.QL`query {
      viewer{
        ${Component.getFragment('viewer', vars)}
      }
    }`
  };
}