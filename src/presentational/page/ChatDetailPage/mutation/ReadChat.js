import Relay from 'react-relay';

export default class ReadChatMutation extends Relay.Mutation {
  static fragments = {
    viewer: () => Relay.QL`
      fragment on Viewer {
        id
      }
    `,
    chat: () => Relay.QL`
      fragment on Chat {
        id
      }
    `,
  };

  getMutation() {
    return Relay.QL`mutation { readChat }`;
  }

  getFatQuery() {
    return Relay.QL`
      fragment on readChatPayload @relay(pattern: true) {
        viewer {
          chats
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
    return {
      chatId: this.props.chat.id,
    };
  }
}
