import Relay from 'react-relay';

export const QUERY_MESSAGE = Relay.QL`fragment on MessageEdge{
    node {
      id,
      text,
      author {
        id,
        firstName,
        lastName,
        pseudo
      },
      created 
    }
  }`;