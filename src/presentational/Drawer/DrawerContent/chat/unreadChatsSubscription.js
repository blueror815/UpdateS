import Relay from 'react-relay';
import { Subscription } from 'relay-subscriptions';

export default class unreadChatsSubscription extends Subscription {
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
        unreadChatsSubscription(input: $input) {
          unreadChats
          viewer {
            id
          }
        }
      }
    `;
  }

  getConfigs() {
    return [{
      type: 'FIELDS_CHANGE',
      fieldIDs: {
        viewer: this.props.viewer.id,
      },
    }];
  }

  getVariables() {
    return {};
  }
}
