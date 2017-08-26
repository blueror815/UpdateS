import Relay from 'react-relay';
import CirclesListView from '../CirclesListView'

export default class DeleteCircle extends Relay.Mutation {
  static fragments = {
    viewer: () => Relay.QL`
      fragment on Viewer {
        id,
        circles (last: 10) {
          edges
        }
      }
    `,
    circle: () => Relay.QL`
      fragment on Circle {
        id
      }
    `,
  };

  getMutation() {
    return Relay.QL`mutation{ deleteCircle }`;
  }

  getFatQuery() {
    return Relay.QL`
      fragment on deleteCirclePayload {
        edge,
        clientMutationId,
        viewer {
          circles
        }
      }
    `;
  }

  getConfigs() {
    return [{
      type: 'NODE_DELETE',
      parentName: 'viewer',
      parentID: this.props.viewer.id,
      connectionName: 'CircleConnection',
      deletedIDFieldName: 'edge{node{id}}',
    }];
  }

  getVariables() {
    return {
      circleId: this.props.circle.id,
    };
  }

  getOptimisticResponse() {

    const viewerPayload = { id: this.props.viewer.id, };
    
    return {
      viewer: viewerPayload,
      edge: {node: {id : this.props.circle.id }},
    };

  }
}