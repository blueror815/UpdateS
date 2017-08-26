//  WAITING FOR SERVER UPDATE

import Relay from 'react-relay';
/**
*  New sportunity mutation
*/
export default class UpdateUserMutation extends Relay.Mutation {
  /**
  *  Mutation
  */
  getMutation() {
    return Relay.QL`mutation Mutation{
      upUser
    }`;
  }
  /**
  *  Variables
  */
  getVariables() {
    return {
      user: {
        firstName: this.props.name,
        lastName: this.props.name,
        pseudo: this.props.email,
        email: this.props.email,
        password: this.props.password,
        phonePrefix: this.props.phone,
        phoneNumber: this.props.phone,
        age: this.props.age,
        sex: this.props.sex
      }
    };
  }
  /**
  *  Fat query
  */
  getFatQuery() {
    return Relay.QL`
      fragment on newSportunityPayload {
        clientMutationId,
        sportunity
      }
    `;
  }
  /**
  *  RELAY CONTAINER (HOC)
  */
  getConfigs() {
    return [{
      type: 'REQUIRED_CHILDREN',
      children: [
        Relay.QL`
          fragment on newUserPayload {
            clientMutationId,
            User {
              id,
              firstName,
              lastName,
              pseudo,
              email,
              phonePrefix,
              phoneNumber,
              age,
              sex,
              address {
                country,
                city,
                zip
              },
              sports {
                sport {
                  id,
                  name,
                  logo,
                  psoitions {
                    FR,
                    EN,
                    DE,
                    ES
                  },
                  level {
                    FR {
                      name,
                      description,
                      skillLevel
                    },
                    DE,
                    EN,
                    ES
                  },
                  certificates {
                    FR,
                    EN,
                    DE,
                    ES
                  }
                }
              },
            }
          }
        `
      ]
    }];
  }
}
