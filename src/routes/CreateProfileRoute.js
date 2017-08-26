import Relay from 'react-relay';
/**
 *  Entry point for Create Profile
 *
 */
export class CreateProfileRoute extends Relay.Route {
  static routeName = 'CreateProfileRoute';
  static queries = {
    viewer: () => Relay.QL`
      query {
        viewer
      }`
    ,
  };
}
