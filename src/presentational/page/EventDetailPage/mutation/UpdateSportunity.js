import Relay from 'react-relay';

export default class UpdateSportunity extends Relay.Mutation {
 
  getMutation() {
    return Relay.QL`mutation {updateSportunity}`;
  }

  getVariables() {
    // test status Sportunity
    // canceling

    return {
      sportunityID: this.props.sportunity.id,
      sportunity:{
        participants: this.props.user.id
      }
    };
  }

  getFatQuery() {
    return Relay.QL`
      fragment on updateSportunityPayload @relay(pattern: true) {
        viewer {
          sportunities
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

  getOptimisticResponse() {
    const viewerPayload = {id: this.props.viewer.id};
    
    return {
      sportunity: {
        id: this.props.sportunity.id,
      },
      viewer: viewerPayload,
    };
  }

  static fragments = {
    sportunity: () => Relay.QL`
      fragment on Sportunity {
        id,
      }
    `,
    viewer: () => Relay.QL`
      fragment on Viewer {
        id
        sportunities(last: 10) {
          edges
        }
      }
    `,
    user: () => Relay.QL`
      fragment on User {
        id
      }
    `
  };
}
