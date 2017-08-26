import Relay from 'react-relay';
/**
*  New sportunity mutation
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
        firstName: this.props.firstName,
        lastName: this.props.lastName,
        pseudo: this.props.pseudo,
        email: this.props.email,
        password: this.props.password,
        phonePrefix: this.props.phonePrefix,
        phoneNumber: this.props.phoneNumber,
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
      fragment on newUserPayload {
        clientMutationId,
        user
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
            user {
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
                  name {
                    FR,
                    EN,
                    DE,
                    ES
                  },
                  logo,
                  positions {
                    FR,
                    EN,
                    DE,
                    ES
                  },
                  levels {
                    FR {
                      name,
                      description,
                      skillLevel
                    },
                    DE {
                      name,
                      description,
                      skillLevel
                    },
                    EN {
                      name,
                      description,
                      skillLevel
                    },
                    ES {
                      name,
                      description,
                      skillLevel
                    }
                  },
                  certificates {
                    id,
                    name {
                      FR,
                      EN,
                      DE,
                      ES
                    }
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
