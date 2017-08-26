import Relay from 'react-relay';

import ChatDetailPage from '../ChatDetailPage';
export default class AddMessageMutation extends Relay.Mutation {
  static fragments = {
    viewer: () => Relay.QL`
      fragment on Viewer {
        id
      }
    `,
    user: () => Relay.QL`
      fragment on User {
        id
      }
    `,
    chat: () => Relay.QL`
      fragment on Chat {
        id
      }
    `,
  };
  //totalMessageUnread

  getMutation() {
    return Relay.QL`mutation { addMsg }`;
  }

  getFatQuery() {
    return Relay.QL`
      fragment on addMsgPayload @relay(pattern: true) {
        edge
        viewer {
          chats
        }
      }
    `;
  }
  //totalMessageUnread

  getConfigs() {
    return [{
      type: 'RANGE_ADD',
      parentName: 'viewer',
      parentID: this.props.viewer.id,
      connectionName: 'chats',
      edgeName: 'edge',
      rangeBehaviors: ({ status }) => (
        status === 'completed' ? 'ignore' : 'append'
      ),
    }];
  }

  getVariables() {
    return {
      chatId: this.props.chat.id,
      message: {
        text: this.props.text,
        author: this.props.user.id
      }
    };
  }

  getOptimisticResponse() {
    
    return {
      // FIXME: totalCount gets updated optimistically, but this edge does not
      // get added until the server responds
      edge: {
        node: {
          id: this.props.chat.id,
          messages:{
            edges: [{
              node: { text: this.props.text, author: this.props.user}
            }]
          }
        },
      },
      viewer: {
        id: this.props.viewer.id,
        //totalCount: this.props.viewer.totalCount + 1,
      },
    };
  }
}
