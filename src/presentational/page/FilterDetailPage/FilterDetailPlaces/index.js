import React, { PropTypes } from 'react';
import { View, Text, TextInput, Image, TouchableHighlight } from 'react-native';

import { images } from '../../../../theme';
import styles from './style';

const FilterDetailPlaces = (props) => {
  const {
    placeAddress,
    aroundOfPlace,
    setAroundOfPlace,
    handleKeywordChange,
    handleSubmit } = props;

  return (
    <View style={styles.placeContextView}>
      <View style={styles.placeContextClose}>
        <TouchableHighlight>
          <Image style={styles.discloser} source={images.close} />
        </TouchableHighlight>
      </View>
      <View style={styles.locationContext}>
        <TextInput
          style={styles.searchInput}
          value={placeAddress}
          onChange={handleKeywordChange}
          onSubmitEditing={handleSubmit}
        />
      </View>
      <View style={styles.aroundContext}>
        <View style={styles.leftContext}>
          <TouchableHighlight
            style={styles.aroundBtn}
            onPress={() => setAroundOfPlace(-1)}
          >
            <Text style={styles.plusMinusBtn}>-</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.aroundLabel}>
          <Text style={styles.aroundLabelText}>Around</Text>
        </View>
        <View style={styles.aroundValue}>
          <Text style={styles.aroundValueText}>{aroundOfPlace}</Text>
        </View>
        <View style={styles.aroundLabel}>
          <Text style={styles.aroundLabelText}>km</Text>
        </View>
        <View style={styles.rightContext}>
          <TouchableHighlight
            style={styles.aroundBtn}
            onPress={() => setAroundOfPlace(+1)}
          >
            <Text style={styles.plusMinusBtn}>+</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

FilterDetailPlaces.defaultProps = {
  placeAddress: '',
};

FilterDetailPlaces.propTypes = {
  setAroundOfPlace: PropTypes.func.isRequired,
  handleKeywordChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  aroundOfPlace: PropTypes.number,
  placeAddress: PropTypes.string,
};

export default FilterDetailPlaces;
