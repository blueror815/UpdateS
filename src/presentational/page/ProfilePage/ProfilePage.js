import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Relay from 'react-relay';
import { Actions } from 'react-native-router-flux';

// import { QUERY_USER } from '../../../query/profile';
import styles from './style';

import Subheader from './Subheader/Subheader.js';
import Description from './Description/Description.js';
import Languages from './Languages/Languages.js';
import SportsList from './SportsList/SportsList.js';
import CircleList from './CircleList/CircleList.js';
import FeedbacksList from './FeedbacksList/FeedbacksList.js';
import Block from './Block/Block.js';
import Report from './Report/Report.js';

/**
*  Profile page
*/
class ProfilePage extends Component {
  /**
  *  constructor
  */
  constructor() {
    super();
  }

  componentDidMount = () => {
    Actions.refresh({title: this.props.user_profile.me.firstName});
  }

  /**
  *   Render
  */
  render(){
    const user_profile = this.props.user_profile;
    return(
      <ScrollView style={styles.container}>
        <Subheader />
        <Description />
        <Languages />
        <SportsList
          sports={user_profile.me.sports}
        />
        <CircleList
          circles={user_profile.me.circles.edges}
        />
        <FeedbacksList
          feedbacks={user_profile.me.feedbacks}
        />
        <Block />
        <Report />

      </ScrollView>
    )
  }
}

ProfilePage.propTypes = {
  user_profile: React.PropTypes.object.isRequired
};

export default Relay.createContainer(ProfilePage, {
  fragments: {
    user_profile: () => Relay.QL`
      fragment on Viewer{
        me {
          id,
          firstName,
          lastName,
          pseudo,
          email,
          avatar,
          language,
          description,
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
          circles (last: 4){
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
          }
        }
      }
    `
  }
});
