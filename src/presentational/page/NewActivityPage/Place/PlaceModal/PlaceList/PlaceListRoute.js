import Relay from 'react-relay';
/**
 *  Entry point for activities
 *
 */
export class PlaceListRoute extends Relay.Route {
  static routeName = 'PlaceListRoute';
  static queries = {
    all_venues: Component => Relay.QL`
      query {
        viewer {
          ${Component.getFragment('all_venues')}
        }
      }
    `,
  };
}
