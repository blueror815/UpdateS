import Relay from 'react-relay';

export default class UpdateCicle extends Relay.Mutation {
 
  getMutation() {
    return Relay.QL`mutation {updateCircle}`;
  }

  getVariables() {
    return {
      circleId: this.props.circle.id,
      circle:{
        name: this.props.name
      }
    };
  }

  getFatQuery() {
    return Relay.QL`
      fragment on updateCirclePayload @relay(pattern: true) {
        viewer {
          circles
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
      circle: {
        name: this.props.name,
        id: this.props.circle.id,
      },
      viewer: viewerPayload,
    };
  }

  static fragments = {
    circle: () => Relay.QL`
      fragment on Circle {
        id,
      }
    `,
    viewer: () => Relay.QL`
    fragment on Viewer {
      id,
      circles (last: 10) {
        edges
      }
    }
    `,
  };
}
