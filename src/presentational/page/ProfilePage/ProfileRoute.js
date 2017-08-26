import Relay from 'react-relay';
/**
 *  Entry point for Profile
 *
 */
export class ProfileRoute extends Relay.Route {
  static routeName = 'ProfileRoute';
  static queries = {
    user_profile: Component => Relay.QL`
      query {
        viewer {
          ${Component.getFragment('user_profile')}
        }
      }
    `,
  };
}
