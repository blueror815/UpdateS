import React from 'react';
import {
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import Relay from 'react-relay';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updatePlace, updatePlaceModal } from 'sportunity/src/action/newActivityActions';

import styles from './style';

const PlaceList = ({ all_venues, updatePlace, updatePlaceModal, searchPlaceText }) => {

  const addPlace = (item) => {
    updatePlace(item);
    updatePlaceModal(false);
  }

  return(
    <ScrollView style={styles.container}>

      {
        all_venues.venues.edges
        .filter((item) => item.node.name.toLowerCase().indexOf(searchPlaceText) >= 0)
          .map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.itemContainer}
              onPress={() => addPlace(item)}
            >
              <Text style={styles.name}>
                {item.node.name}
              </Text>

            </TouchableOpacity>
          ))
      }

    </ScrollView>
  )
}

PlaceList.propTypes = {
  all_venues: React.PropTypes.object.isRequired,
  updatePlace: React.PropTypes.func.isRequired,
  updatePlaceModal: React.PropTypes.func.isRequired,
  searchPlaceText: React.PropTypes.string.isRequired,
};

const stateToProps = (state) => ({
  searchPlaceText: state.sportunityNewActivity.searchPlaceText
});

const dispatchToProps = (dispatch) => ({
  updatePlace: bindActionCreators(updatePlace, dispatch),
  updatePlaceModal: bindActionCreators(updatePlaceModal, dispatch)
});

const PlaceListReduxContainer = connect(
  stateToProps,
  dispatchToProps
)(PlaceList);

export default Relay.createContainer(PlaceListReduxContainer, {
  fragments: {
    all_venues: () => Relay.QL`
      fragment on Viewer{
        venues(last : 50){
          edges {
            node {
              id,
              name
            }
          }
        }
      }
    `,
  }
});
