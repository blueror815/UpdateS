import Relay from 'react-relay';
/**
*  New user mutation
*/
export default class NewUserMutation extends Relay.Mutation {
  /**
  *  Mutation
  */
  getMutation() {
    return Relay.QL`mutation Mutation{
      newUser
    }`;
  }
  /**
  *  Variables
  */
  getVariables() {
    return {
      user: {
        firstName: this.props.firstNameVar,
        lastName: this.props.lastNameVar,
        pseudo: this.props.pseudoVar,
        email: this.props.emailVar,
        password: this.props.passwordVar,
        language: this.props.languageVar,
        description: this.props.descriptionVar,
        avatar: this.props.avatarVar,
        phonePrefix: this.props.phonePrefixVar,
        phoneNumber: this.props.phoneNumberVar,
        age: this.props.ageVar,
        sex: this.props.sexVar
      }
    };
  }
  /**
  *  Fat query
  */
  getFatQuery() {
    return Relay.QL`
      fragment on newUserPayload {
        clientMutationId,
        user,
        viewer
      }
    `;
  }
  /**
  *  Config
  */
  getConfigs() {
    return [{
      type: 'REQUIRED_CHILDREN',
      children: [
        Relay.QL`
          fragment on newUserPayload {
            clientMutationId,
            viewer,
            user
          }
        `
      ]
    }];
  }
}
