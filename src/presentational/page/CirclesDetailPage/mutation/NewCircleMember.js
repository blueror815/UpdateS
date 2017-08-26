import Relay from 'react-relay';
/**
*  New Circle mutation
*/
export default class AddCircleMember extends Relay.Mutation {
  /**
  *  Mutation
  */
  getMutation() {
    return Relay.QL`mutation Mutation{
      addCircleMember
    }`;
  }
  /**
  *  Variables
  */
  getVariables() {

    const isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    ;
    let variables = {
      circleId: this.props.circle.id,
    }

    if(!isEmail.test(this.props.user.pseudo)){
      variables.pseudo = this.props.user.pseudo;
    }
    else
      variables.email = this.props.user.pseudo;

    console.log('variablesvariables',variables);

    return variables;
  }
  /**
  *  Fat query
  */
  getFatQuery() {
    return Relay.QL`
    fragment on addCircleMemberPayload @relay(pattern: true){
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
  };
}
