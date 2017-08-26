import Relay from 'react-relay';
/**
 *  Gives an entry point into a Graphql query to the query fragment used
 *  within its component.
 *
 */
export class ProfileRoute extends Relay.Route {
  static routeName = 'ProfileRoute';
  static paramDefinitions = {
    id: {required: true},
  };

  static queries = {
    viewer: (Component, vars) => Relay.QL`
      query {
        viewer {
          ${Component.getFragment('viewer', vars)}
        }
      }
    `,
  };
}
