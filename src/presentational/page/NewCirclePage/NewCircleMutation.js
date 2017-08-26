import Relay from 'react-relay';
/**
*  New Circle mutation
*/
export default class NewCircleMutation extends Relay.Mutation {
  /**
  *  Mutation
  */
  getMutation() {
    return Relay.QL`mutation Mutation{
      newCircle
    }`;
  }
  /**
  *  Variables
  */
  getVariables() {
    return {
      circle: {
        name: this.props.name,
      }
    };
  }
  /**
  *  Fat query
  */
  getFatQuery() {
    return Relay.QL`
      fragment on newCirclePayload @relay(pattern: true){
        edge,
        clientMutationId,
        viewer {
          circles
        }
      }
    `;
  }

  /**
  *  Config
  */
  getConfigs() {
    console.log('this.props.viewer.id', this.props.viewer.id);
    return [{
      type: 'RANGE_ADD',
      parentName: 'viewer',
      parentID: this.props.viewer.id,
      connectionName: 'CircleConnection',
      edgeName: 'edge',
      rangeBehaviors: {
        '': 'prepend',
      },
    }];
  }

  getOptimisticResponse() {
    const { viewer, name } = this.props;

    console.log('viewerID', viewer.id)
    
    return {
      viewer: { id: viewer.id,},
    };
  }

  static fragments = {
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
