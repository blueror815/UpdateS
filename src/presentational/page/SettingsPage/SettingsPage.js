import React, { Component } from 'react';

import {
  Text,
  View,
  ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateEmail, updatePassword, login, loginFacebook } from 'sportunity/src/action/authActions';

import { Actions } from 'react-native-router-flux';

// These styles are imported from reusable components
import OpacityButton from 'sportunity/src/presentational/OpacityButton';
import opacityButtonStyles from 'sportunity/src/presentational/OpacityButton/style';
import Icon from 'sportunity/src/presentational/Icon';
import iconStyles from 'sportunity/src/presentational/Icon/style';
import Input from 'sportunity/src/presentational/Input';
import inputStyles from 'sportunity/src/presentational/Input/style';
import TouchableText from 'sportunity/src/presentational/TouchableText';
import touchableTextStyles from 'sportunity/src/presentational/TouchableText/style.js';
import icons from 'sportunity/src/theme/images';
import styles from './style';

const FBSDK = require('react-native-fbsdk');

const {
  LoginManager,
  AccessToken
} = FBSDK;
/**
* Login

*/
class SettingsPage extends Component {

  // If user is logged in, redirect to profile screen
  componentDidMount = () => {
    if (this.props.isLoggedIn === true) {
      Actions.sportunites({type: 'reset'});
    }
  }
  componentDidUpdate = () => {
    if (this.props.isLoggedIn === true) {
      Actions.sportunities({type: 'reset'});
    }
  }

  facebookLogin = () => {
    LoginManager.logInWithReadPermissions(['public_profile'])
      .then(
        (result) => {
          if (result.isCancelled) {
            alert('Login cancelled');
          } else {
            AccessToken.getCurrentAccessToken().then(
              (data) => {
                const facebookToken = data.accessToken;
                this.props.loginFacebook(facebookToken);
              }
            )
          }
        },
        (error) => {
          console.log('Login fail with error: ' + error);
        }
      );
  }
  /**
  * RENDER
  */
  render() {
    const {
      errorMessage,
      isFetching,
      password,
      email,
      login,
      updatePassword,
      updateEmail,
      loginFacebook
    } = this.props;

    return (
      <View style={styles.container}>
        <Icon
          iconSource={icons.key}
          iconStyle={[iconStyles.centerIcon, iconStyles.keyIcon]}
        />
        <Text style={styles.centerText}>
          LOGIN TO YOUR ACCOUNT
        </Text>
        <View style={styles.inputsContainer}>
          <Input
            styles={inputStyles.input}
            inputIconStyles={inputStyles.icon}
            updateText={(text) => updateEmail(text)}
            placeholder="Email"
          />
          <Input
            styles={inputStyles.input}
            inputIconStyles={inputStyles.icon}
            updateText={(text) => updatePassword(text)}
            placeholder="Password"
            secureTextEntry
          />
        </View>
        <TouchableText
          textStyles={touchableTextStyles.rightUnderlinedText}
          text="Forgot password?"
          handlePress={Actions.createProfile}
        />
        {
          isFetching ?
            <ActivityIndicator
              animating={isFetching}
              style={styles.ActivityIndicator}
            /> : null
        }
        {
          errorMessage ?
            <Text
              style={styles.errorText}
            >
              {errorMessage}
            </Text>
             : null
        }
        <OpacityButton
          buttonStyles={opacityButtonStyles.submitButton}
          textStyles={opacityButtonStyles.submitText}
          text="LOGIN"
          handlePress={() => login(email, password)}
        />
        <OpacityButton
          buttonStyles={opacityButtonStyles.facebookButton}
          textStyles={opacityButtonStyles.facebookText}
          text="Sign in with Facebook"
          handlePress={this.facebookLogin}
        />
        <OpacityButton
          buttonStyles={opacityButtonStyles.googleButton}
          textStyles={opacityButtonStyles.googleText}
          text="Sign in with Google"
          handlePress={loginFacebook}
        />
        <TouchableText
          textStyles={touchableTextStyles.rightUnderlinedText}
          handlePress={Actions.createProfile}
          text="CREATE ACCOUNT"
        />
      </View>
    );
  }
}

SettingsPage.propTypes = {
  updateEmail: React.PropTypes.func.isRequired,
  updatePassword: React.PropTypes.func.isRequired,
  login: React.PropTypes.func.isRequired,
  isLoggedIn: React.PropTypes.bool.isRequired,
  email: React.PropTypes.string.isRequired,
  password: React.PropTypes.string.isRequired,
  isFetching: React.PropTypes.bool.isRequired,
  errorMessage: React.PropTypes.string.isRequired,
  loginFacebook: React.PropTypes.func.isRequired,
};

const stateToProps = (state) => ({
  email: state.sportunityAuth.email,
  password: state.sportunityAuth.password,
  isLoggedIn: state.sportunityAuth.isLoggedIn,
  isFetching: state.sportunityAuth.isFetching,
  errorMessage: state.sportunityAuth.errorMessage,
});

const dispatchToProps = (dispatch) => ({
  updateEmail: bindActionCreators(updateEmail, dispatch),
  updatePassword: bindActionCreators(updatePassword, dispatch),
  login: bindActionCreators(login, dispatch),
  loginFacebook: bindActionCreators(loginFacebook, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(SettingsPage);
