import Relay from 'react-relay';
import { Subscription } from 'relay-subscriptions';

import ChatDetailPage from '../ChatDetailPage';

export default class AddMessage extends Subscription {
  static fragments = {
    viewer: () => Relay.QL`
      fragment on Viewer {
        id
      }
    `
  };

  getSubscription() {
    return Relay.QL`
      subscription {
        addMsgSubscription(input: $input) {
          edge {
            __typename
            node {
              ${ChatDetailPage.getFragment('chat')}
            }
          }
          viewer {
            id
          }
        }
      }
    `;
  }
/*

*/

  getConfigs() {
    return [{
      type: 'RANGE_ADD',
      parentName: 'viewer',
      parentID: this.props.viewer.id,
      connectionName: 'chats',
      edgeName: 'edge',
      rangeBehaviors: () => 'append',
    }];
  }

  getVariables() {
    return {};
  }
}
