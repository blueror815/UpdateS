import Relay from 'react-relay';

export default class RemoveCircleMember extends Relay.Mutation {
  static fragments = {
    viewer: () => Relay.QL`
      fragment on Viewer {
        id
      }
    `,
    circle: () => Relay.QL`
      fragment on Circle {
        id
      }
    `,
    user: () => Relay.QL`
      fragment on User {
        pseudo,
        email
      }
    `,
  };

  getMutation() {
    return Relay.QL`mutation{ removeCircleMember }`;
  }

  getFatQuery() {
    return Relay.QL`
    fragment on removeCircleMemberPayload {
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
      deletedIDFieldName: 'edge{node{members{id}}}',
    }];
  }

  getVariables() {
    const variables = { circleId: this.props.circle.id };
    
    if(this.props.user.pseudo)
      variables.pseudo =  this.props.user.pseudo;
    
    if(this.props.user.email)
      variables.email =  this.props.user.email;

    return variables;
  }

  getOptimisticResponse() {

    const viewerPayload = { id: this.props.viewer.id, };
    
    return {
      viewer: viewerPayload,
      edge: {node: {id : this.props.circle.id }},
    };

  }
}