import Relay from 'react-relay';
/**
 *  Entry point for Sports
 *
 */
export class SportListRoute extends Relay.Route {
  static routeName = 'SportListRoute';
  static queries = {
    all_sports: Component => Relay.QL`
      query {
        viewer {
          ${Component.getFragment('all_sports')}
        }
      }
    `,
  };
}
