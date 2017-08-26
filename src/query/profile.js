import Relay from 'react-relay';
import ProfilePage from '../presentational/page/ProfilePage/ProfilePage.js';

export const QUERY_PROFILE = Relay.QL`fragment on Viewer{
  me{
    ${ProfilePage.getFragment('user_profile')}
  }
}`;

export const QUERY_PROFILE_USER = Relay.QL`fragment on Viewer{
  user(id: $id) {
    ${ProfilePage.getFragment('user_profile')}
  }
}`;

export const QUERY_USER = Relay.QL`fragment on User{
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
    zip,
    position{
      lat,
      lng
    }
  },
  sports {
    sport{
      id,
      name{
        EN,
        DE,
        FR,
        ES
      },
      logo,
      positions{
        FR,
        EN,
        DE,
        ES
      },
      certificates{
        id,
        name{
          FR,
          EN,
          DE,
          ES
        }
      },
      levels{
        FR {
          name,
          description,
          skillLevel
        },
        EN {
          name,
          description,
          skillLevel
        },
        DE {
          name,
          description,
          skillLevel
        },
        ES {
          name,
          description,
          skillLevel
        }
      }
    }
  },
  feedbacks{
    count,
    feedbacksList(last: 3){
      edges {
        node {
          id,
          text,
          rating,
          createdAt,
          author{
            id,
            firstName
          }
        }
      }
    }
  },
  circles (last: 3){
    edges {
      node {
        id,
        name,
        owner {
          id,
          firstName
        },
        mode
      }
    }
  },
  sportunities,
}`;
