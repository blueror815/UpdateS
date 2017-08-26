import Relay from 'react-relay';
/**
 *  Gives an entry point into a Graphql query to the query fragment used
 *  within its component.
 *
 */
export class SportunityPageRoute extends Relay.Route {
  static routeName = 'SportunityPageRoute';

  static prepareParams = (prevParams) => {
    return {
      // Pass base set of supplied params through:
      ...prevParams,

    }
  };

  static queries = {
    viewer: (Component, vars) => Relay.QL`query {
        viewer {
          ${Component.getFragment('viewer', vars)}
        }
      }
    `
  };
}
