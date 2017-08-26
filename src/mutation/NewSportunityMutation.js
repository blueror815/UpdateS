import Relay from 'react-relay';
/**
*  New sportunity mutation
*/
export default class NewSportunityMutation extends Relay.Mutation {
  /**
  *  Mutation
  */
  getMutation() {
    return Relay.QL`mutation Mutation{
      newSportunity
    }`;
  }
  /**
  *  Variables
  */
  getVariables() {
    return {
      sportunity: {
        title: this.props.title,
        description: this.props.description,
        address: this.props.address,
        venue: this.props.venue,
        organizers: this.props.organizers,
        sport: this.props.sport,
        participantRange: this.props.participantRange,
        mode: this.props.mode,
        ageRestriction: this.props.ageRestriction,
        sexRestriction: this.props.sexRestriction,
        levelRestriction: this.props.levelRestriction,
        price: this.props.price,
        beginning_date: this.props.beginningDate,
        ending_date: this.props.endingDate
      }
    };
  }
  /**
  *  Fat query
  */
  getFatQuery() {
    return Relay.QL`
      fragment on newSportunityPayload @relay(pattern: true){
        edge,
        clientMutationId,
        viewer {
          viewerId
          sportunities
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
      parentID: this.props.viewer.__dataID__,
      connectionName: 'SportunityConnection',
      edgeName: 'edge',
      rangeBehaviors: {
        '': 'prepend',
      },
    }];
  }

  static fragments = {
    viewer: () => Relay.QL`
      fragment on Viewer {
        sportunities(last: 50) {
          edges {
            node {
              id,
              title,
              description,
              randomDate,
              nbLikes,
              participants{
                id,
                firstName,
                lastName,
                pseudo
              },
              participantRange{
                from
                to
              },
              levelRestriction {
                from
                to
              },
              sexRestriction,
              ageRestriction {
                from
                to
              },
              price {
                currency
                cents
              },
              address {
                country
                city
                zip
                position {
                  lat
                  lng
                }
              },
              sport {
                id,
                levels{
                  EN {
                    name
                  }
                },
                name {
                  FR
                  EN
                  DE
                  ES
                },
                logo,
                positions {
                  FR
                  EN
                  DE
                  ES
                }
              },
              beginning_date,
              ending_date
            }
          }
        }
      }
    `,
  };
}
