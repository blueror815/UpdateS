import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updatePlaceModal } from 'sportunity/src/action/newActivityActions';
import icons from 'sportunity/src/theme/images';
import style from './style';
import PlaceModal from './PlaceModal/PlaceModal.js';

const Place = ({ updatePlaceModal, placeName, isPlaceModalVisible }) => {

  const openClosePlaceModal = () => {
    if (isPlaceModalVisible) {
      updatePlaceModal(false);
    } else {
      updatePlaceModal(true);
    }
  }

  return(
    <TouchableOpacity
      style={style.container}
      onPress={openClosePlaceModal}
    >
      <PlaceModal />

      <View style={style.subContainer}>
        <Text style={style.text}>
          Place
        </Text>
        {
          placeName === '' ?
            <Text style={style.select}>
              Select
            </Text> :
            <Text style={style.select}>
              {placeName}
            </Text>
        }
      </View>
      <Image
        style={style.icon}
        source={icons.right_arrow_blue}
      />
    </TouchableOpacity>
  )
}

Place.propTypes = {
  updatePlaceModal: React.PropTypes.func.isRequired,
  placeName: React.PropTypes.string.isRequired,
  isPlaceModalVisible: React.PropTypes.bool.isRequired
};

const stateToProps = (state) => ({
  placeName: state.sportunityNewActivity.placeName,
  isPlaceModalVisible: state.sportunityNewActivity.isPlaceModalVisible
});

const dispatchToProps = (dispatch) => ({
  updatePlaceModal: bindActionCreators(updatePlaceModal, dispatch)
});

export default connect(
  stateToProps,
  dispatchToProps
)(Place);
