import React, { Component } from 'react';
import { View, TextInput, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { debounce } from 'lodash';
import { updateSearchSportText} from 'sportunity/src/action/newActivityActions';
import { images, colors } from 'sportunity/src/theme';
import styles from './style';

/**
*  SearchBar
*/
class SearchBar extends Component {
  /**
  *  Constructor
  */
  constructor(){
    super();
    this.updateSearchSportText = debounce(this.updateSearchSportText, 400);
  }

  updateSearchSportText = (text) => {
    this.props.updateSearchSportText(text);
  }
  /**
  *  Render
  */
  render(){
    return(
      <View style={styles.container}>

        <Image source={images.search_blue} />

        <TextInput
          style={styles.input}
          placeholder="Search sport"
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={(text) => this.updateSearchSportText(text)}
          underlineColorAndroid={colors.snow}
        />

      </View>
    )
  }
}

SearchBar.propTypes = {
  updateSearchSportText: React.PropTypes.func.isRequired,
};

const dispatchToProps = (dispatch) => ({
  updateSearchSportText: bindActionCreators(updateSearchSportText, dispatch),
});

export default connect(
  null,
  dispatchToProps
)(SearchBar);
