import React from 'react';
import { View } from 'react-native';

import UserSportList from './UserSportList';
import SearchBar from './SearchBar';
import SportList from './SportList';

import styles from './style';

const SportPage = ({ searchText, actions }) => (
  <View style={styles.container}>
    <UserSportList />
    <SearchBar
      searchText={searchText}
      updateSearchText={actions.updateSearchText}
    />
    <SportList />
  </View>
);

SportPage.propTypes = {
  searchText: React.PropTypes.string.isRequired,
  actions: React.PropTypes.object.isRequired,
};

export default SportPage;
