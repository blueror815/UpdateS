import React from 'react';
import { Modal, Text, TouchableOpacity, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateSportModal } from 'sportunity/src/action/newActivityActions';
import icons from 'sportunity/src/theme/images';
import style from './style';
import SearchBar from './SearchBar/SearchBar.js';
import SportListContainer from './SportList/SportListContainer.js';

/**
*  Sport Modal
*/
const SportModal = ({ updateSportModal, isSportModalVisible }) => {

  const openCloseSportModal = () => {
    if (isSportModalVisible) {
      updateSportModal(false);
    } else {
      updateSportModal(true);
    }
  }

  return(
    <View>
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={isSportModalVisible}
        onRequestClose={() => false}
      >
        <View style={style.header}>
          <TouchableOpacity
            onPress={openCloseSportModal}
            style={style.icon}
          >
            <Image
              source={icons.down_arrow}
            />
          </TouchableOpacity>

          <Text style={style.title}>
            Sport
          </Text>
        </View>

        <SearchBar />

        <SportListContainer />

      </Modal>

    </View>
  )
}

SportModal.propTypes = {
  updateSportModal: React.PropTypes.func.isRequired,
  isSportModalVisible: React.PropTypes.bool.isRequired
};


const stateToProps = (state) => ({
  isSportModalVisible: state.sportunityNewActivity.isSportModalVisible
});

const dispatchToProps = (dispatch) => ({
  updateSportModal: bindActionCreators(updateSportModal, dispatch)
});

export default connect(
  stateToProps,
  dispatchToProps
)(SportModal);
