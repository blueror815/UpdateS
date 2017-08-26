import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateSearchText } from 'sportunity/src/action/sportActions.js';

import UserSportList from './UserSportList';
import SearchBar from './SearchBar';
import SportList from './SportList';

import styles from './style';

const SportPage = ({ searchText, updateSearchText }) => (
  <View style={styles.container}>
    <UserSportList />
    <SearchBar
      searchText={searchText}
      updateSearchText={updateSearchText}
    />
    <SportList />
  </View>
);

SportPage.propTypes = {
  searchText: React.PropTypes.string.isRequired,
  updateSearchText: React.PropTypes.func.isRequired,
};

const stateToProps = (state) => ({
  searchText: state.sportunitySport.searchText,
});

const dispatchToProps = (dispatch) => ({
  updateSearchText: bindActionCreators(updateSearchText, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(SportPage);
