import React from 'react';
import {
  View,
  TextInput,
  Image
} from 'react-native';

import { images } from 'sportunity/src/theme';
import styles from './style';

const SearchBar = ({ updateSearchText }) => (
  <View style={styles.container}>

    <Image source={images.search} />

    <TextInput
      style={styles.input}
      placeholder="Search me..."
      autoCorrect={false}
      autoCapitalize="characters"
      onChangeText={(text) => updateSearchText(text)}
    />

  </View>
);

SearchBar.propTypes = {
  updateSearchText: React.PropTypes.func.isRequired
};

export default SearchBar;
