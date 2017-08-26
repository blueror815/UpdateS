import Relay from 'react-relay';
/**
 *  Entry point for activities
 *
 */
export class NewActivityRoute extends Relay.Route {
  static routeName = 'NewActivityRoute';
  static queries = {
    all_sports: Component => Relay.QL`
      query {
        viewer {
          ${Component.getFragment('all_sports')}
        }
      }
    `,
    all_venues: Component => Relay.QL`
      query {
        viewer {
          ${Component.getFragment('all_venues')}
        }
      }
    `,
    viewer: () => Relay.QL`
      query {
        viewer
      }`
    ,
  };
}
