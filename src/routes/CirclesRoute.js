import Relay from 'react-relay';
/**
 *  Gives an entry point into a Graphql query to the query fragment used
 *  within its component.
 *
 */
export class CirclesRoute extends Relay.Route {
  static routeName = 'CirclesRoute';
  static queries = {
    viewer: Component => Relay.QL`
      query {
        viewer {
          ${Component.getFragment('viewer')}
        }
      }
    `
  };
}
