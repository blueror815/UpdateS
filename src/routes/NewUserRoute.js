import Relay from 'react-relay';
/**
 *  Entry point for activities
 *
 */
export class NewUserRoute extends Relay.Route {
  static routeName = 'NewUserRoute';
  static mutations = {
    new_user: Component => Relay.QL`
      mutation {
        newUser (input: $newUserInput) {
          ${Component.getFragment('new_user')}
        }
      }
    `,
  };
}
