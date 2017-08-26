import React from 'react';
import {
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import Relay from 'react-relay';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateSport, updateSportModal } from 'sportunity/src/action/newActivityActions';

import styles from './style';

// NOTEs:
// Some sports in database don't have a name. I am rendering ID's at the moment.
// I will revert to names when DB is updated
// I am also searching logo instead of name for the same reason
const SportList = ({ all_sports, updateSport, updateSportModal, searchSportText }) => {

  const addSport = (sportItem) => {
    updateSport(sportItem);
    updateSportModal(false);
  }

  return(
    <ScrollView style={styles.container}>

      {
        all_sports.sports.edges
          .filter((item) => item.node.logo.toLowerCase().indexOf(searchSportText) >= 0)
          .map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.itemContainer}
              onPress={() => addSport(item)}
            >
              <Text style={styles.name}>
                {item.node.id}
              </Text>

            </TouchableOpacity>
          ))
      }

    </ScrollView>
  )
}

SportList.propTypes = {
  all_sports: React.PropTypes.object.isRequired,
  updateSport: React.PropTypes.func.isRequired,
  updateSportModal: React.PropTypes.func.isRequired,
  searchSportText: React.PropTypes.string.isRequired,
};

const stateToProps = (state) => ({
  searchSportText: state.sportunityNewActivity.searchSportText
});

const dispatchToProps = (dispatch) => ({
  updateSport: bindActionCreators(updateSport, dispatch),
  updateSportModal: bindActionCreators(updateSportModal, dispatch)
});

const SportListReduxContainer = connect(
  stateToProps,
  dispatchToProps
)(SportList);

export default Relay.createContainer(SportListReduxContainer, {
  fragments: {
    all_sports: () => Relay.QL`
      fragment on Viewer{
        sports (last: 50){
          edges {
            node {
              id,
              name {
                FR,
                EN,
                DE,
                ES
              },
              logo
            }
          }
        }
      }
    `,
  }
});
