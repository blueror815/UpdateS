import Relay from 'react-relay';


export class ViewerRoute extends Relay.Route {
  static routeName = 'ViewerRoute';
  

  static queries = {
    viewer: (Component, vars) => Relay.QL`
      query {
        viewer{
          ${Component.getFragment('viewer', vars)}
        }
      }`
  };
}