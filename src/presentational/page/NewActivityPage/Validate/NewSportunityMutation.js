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
        ending_date: this.props.endingDate,
        kind: this.props.kind
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
          id
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
      parentID: this.props.viewer.id,
      connectionName: 'SportunityConnection',
      edgeName: 'edge',
      rangeBehaviors: () => 'prepend'
    }];
  }

  static fragments = {
    viewer: () => Relay.QL`
      fragment on Viewer {
        id,
        sportunities(last: 1000) {
          edges
        }
      }
    `,
  };
}
