import React, { Component } from 'react';
import { View, TextInput, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { debounce } from 'lodash';
import { updateSearchPlaceText} from 'sportunity/src/action/newActivityActions';
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
    this.updateSearchPlaceText = debounce(this.updateSearchPlaceText, 400);
  }

  updateSearchPlaceText = (text) => {
    this.props.updateSearchPlaceText(text);
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
          onChangeText={(text) => this.updateSearchPlaceText(text)}
          underlineColorAndroid={colors.snow}
        />

      </View>
    )
  }
}

SearchBar.propTypes = {
  updateSearchPlaceText: React.PropTypes.func.isRequired,
};

const dispatchToProps = (dispatch) => ({
  updateSearchPlaceText: bindActionCreators(updateSearchPlaceText, dispatch),
});

export default connect(
  null,
  dispatchToProps
)(SearchBar);
