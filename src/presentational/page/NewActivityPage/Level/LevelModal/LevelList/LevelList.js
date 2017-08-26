import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  updateLevelModal,
  setAllLevels,
  setBeginnerLevel,
  setIntermediateLevel,
  setAdvancedLevel,
  setProLevel
} from 'sportunity/src/action/newActivityActions';
import RadioButton from 'react-native-radio-button';
import style from './style';

const LevelList = ({
  allLevelsOption,
  beginnerLevelOption,
  intermediateLevelOption,
  advancedLevelOption,
  proLevelOption,
  updateLevelModal,
  setAllLevels,
  setBeginnerLevel,
  setIntermediateLevel,
  setAdvancedLevel,
  setProLevel
}) => {

  const openCloseLevelModal = () => {
    if (this.props.reduxData.isLevelModalVisible) {
      updateLevelModal(false);
    } else {
      updateLevelModal(true);
    }
  }
  const addAllLevels = () => {
    setAllLevels();
  }
  const addBeginnerLevel = () => {
    setBeginnerLevel();
  }
  const addIntermediateLevel = () => {
    setIntermediateLevel();
  }
  const addAdvancedLevel = () => {
    setAdvancedLevel();
  }
  const addProLevel = () => {
    setProLevel();
  }
  return(
    <View style={style.container}>

      <TouchableOpacity
        style={style.levelContainer}
        onPress={openCloseLevelModal}
      >
        <Text style={style.text}>
          ALL LEVELS
        </Text>
        <RadioButton
          animation={'bounceIn'}
          isSelected={allLevelsOption}
          onPress={addAllLevels}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={style.levelContainer}
      >
        <Text style={style.text}>
          Beginner
        </Text>
        <RadioButton
          animation={'bounceIn'}
          isSelected={beginnerLevelOption}
          onPress={addBeginnerLevel}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={style.levelContainer}
      >
        <Text style={style.text}>
          Intermediate
        </Text>
        <RadioButton
          animation={'bounceIn'}
          isSelected={intermediateLevelOption}
          onPress={addIntermediateLevel}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={style.levelContainer}
      >
        <Text style={style.text}>
          Advanced
        </Text>
        <RadioButton
          animation={'bounceIn'}
          isSelected={advancedLevelOption}
          onPress={addAdvancedLevel}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={style.levelContainer}
      >
        <Text style={style.text}>
          Pro
        </Text>
        <RadioButton
          animation={'bounceIn'}
          isSelected={proLevelOption}
          onPress={addProLevel}
        />
      </TouchableOpacity>

    </View>
  )
}

LevelList.propTypes = {
  allLevelsOption: React.PropTypes.bool.isRequired,
  beginnerLevelOption: React.PropTypes.bool.isRequired,
  intermediateLevelOption: React.PropTypes.bool.isRequired,
  advancedLevelOption: React.PropTypes.bool.isRequired,
  proLevelOption: React.PropTypes.bool.isRequired,
  updateLevelModal: React.PropTypes.func.isRequired,
  setAllLevels: React.PropTypes.func.isRequired,
  setBeginnerLevel: React.PropTypes.func.isRequired,
  setIntermediateLevel: React.PropTypes.func.isRequired,
  setAdvancedLevel: React.PropTypes.func.isRequired,
  setProLevel: React.PropTypes.func.isRequired,
};

const stateToProps = (state) => ({
  allLevelsOption: state.sportunityNewActivity.allLevelsOption,
  beginnerLevelOption: state.sportunityNewActivity.beginnerLevelOption,
  intermediateLevelOption: state.sportunityNewActivity.intermediateLevelOption,
  advancedLevelOption: state.sportunityNewActivity.advancedLevelOption,
  proLevelOption: state.sportunityNewActivity.proLevelOption,
});

const dispatchToProps = (dispatch) => ({
  updateLevelModal: bindActionCreators(updateLevelModal, dispatch),
  setAllLevels: bindActionCreators(setAllLevels, dispatch),
  setBeginnerLevel: bindActionCreators(setBeginnerLevel, dispatch),
  setIntermediateLevel: bindActionCreators(setIntermediateLevel, dispatch),
  setAdvancedLevel: bindActionCreators(setAdvancedLevel, dispatch),
  setProLevel: bindActionCreators(setProLevel, dispatch),

});

export default connect(
  stateToProps,
  dispatchToProps
)(LevelList);
