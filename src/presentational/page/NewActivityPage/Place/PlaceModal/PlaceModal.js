import React from 'react';
import { Modal, Text, TouchableOpacity, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updatePlaceModal } from 'sportunity/src/action/newActivityActions';
import icons from 'sportunity/src/theme/images';
import style from './style';
import SearchBar from './SearchBar/SearchBar.js';
import PlaceListContainer from './PlaceList/PlaceListContainer.js';

/**
*  Place Modal
*/
const PlaceModal = ({ updatePlaceModal, isPlaceModalVisible }) => {

  const openClosePlaceModal = () => {
    if (isPlaceModalVisible) {
      updatePlaceModal(false);
    } else {
      updatePlaceModal(true);
    }
  }

  return(
    <View>
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={isPlaceModalVisible}
        onRequestClose={() => false}
      >
        <View style={style.header}>
          <TouchableOpacity
            onPress={openClosePlaceModal}
            style={style.icon}
          >
            <Image
              source={icons.down_arrow}
            />
          </TouchableOpacity>

          <Text style={style.title}>
            Place
          </Text>
        </View>

        <SearchBar />

        <PlaceListContainer />

      </Modal>

    </View>
  )
}

PlaceModal.propTypes = {
  updatePlaceModal: React.PropTypes.func.isRequired,
  isPlaceModalVisible: React.PropTypes.bool.isRequired
};


const stateToProps = (state) => ({
  isPlaceModalVisible: state.sportunityNewActivity.isPlaceModalVisible
});

const dispatchToProps = (dispatch) => ({
  updatePlaceModal: bindActionCreators(updatePlaceModal, dispatch)
});

export default connect(
  stateToProps,
  dispatchToProps
)(PlaceModal);
