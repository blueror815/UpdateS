import React from 'react';
import { ScrollView, Text, ActivityIndicator, Alert } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  creatingProfile,
  validateInputs,
  updateName,
  updateEmail,
  updatePassword,
  updatePhone,
  updateCountry,
  updateCity,
  updateZip,
  updateAdress,
  updateDescription
} from 'sportunity/src/action/createProfileActions';

import Relay from 'react-relay';
import { Actions } from 'react-native-router-flux';

import OpacityButton from 'sportunity/src/presentational/OpacityButton';
import opacityButtonStyles from 'sportunity/src/presentational/OpacityButton/style';
import Icon from 'sportunity/src/presentational/Icon';
import iconStyles from 'sportunity/src/presentational/Icon/style';
import Input from 'sportunity/src/presentational/Input';
import inputStyles from 'sportunity/src/presentational/Input/style';
import TextAreaInput from 'sportunity/src/presentational/TextAreaInput';
import textAreaStyles from 'sportunity/src/presentational/TextAreaInput/style';
import icons from 'sportunity/src/theme/images';

// These components are prepared for languages, sports, payments and payoffs//

// import LanguageItems from './LanguageItems/LanguageItems.js';
// import SportItems from './SportItems/SportItems.js';
// import PaymentMethods from './PaymentMethods/PaymentMethods.js';
// import PayoffMethods from './PayoffMethods/PayoffMethods.js';

import NewUserMutation from './NewUserMutation';
import styles from './style';

/**
* Class
*/
const CreateProfilePage = ({
  relay,
  isCreatingProfile,
  creatingProfile,
  validateInputs,
  updateName,
  updateEmail,
  updatePassword,
  updatePhone,
  updateCountry,
  updateCity,
  updateZip,
  updateAdress,
  updateDescription,
  name,
  email,
  password,
  zip,
  phone,
  description,
  errors
}) => {

  const submitPhone = (num) => {
    const phoneNumber = parseInt(num);
    updatePhone(phoneNumber);
  }

  const submitZip = (num) => {
    const zip = parseInt(num);
    updateZip(zip);
  }

  const createUser = () => {
    creatingProfile(true);
    validateInputs({});

    // missing some data
    const firstNameVar = name;
    const lastNameVar = name;
    const pseudoVar = email;
    const emailVar = email;
    const passwordVar = password;
    const languageVar = 'EN';
    const descriptionVar = description;
    const avatarVar = 'placeholder';
    const phonePrefixVar = zip;
    const phoneNumberVar = phone;
    const ageVar =  0;
    const sexVar = 'MALE';

    if(
      firstNameVar === '' || lastNameVar === '' || emailVar === '' ||
      passwordVar === '' || languageVar === '' || descriptionVar === '' ||
      avatarVar === '' || phonePrefixVar === 0 || phoneNumberVar === 0 ||
      pseudoVar === ''
    ){
      Alert.alert(
        'Info',
        'You need to enter all fields!',
        [
          {text: 'OK', onPress: () => creatingProfile(false)},
        ]
      )
    } else {
      relay.commitUpdate(
        new NewUserMutation({
          firstNameVar,
          lastNameVar,
          pseudoVar,
          emailVar,
          passwordVar,
          languageVar,
          descriptionVar,
          avatarVar,
          phonePrefixVar,
          phoneNumberVar,
          ageVar,
          sexVar,
        }),
        {
          // handle success and errors
          onFailure: error => {
            let errors = JSON.parse(error.getError().source);
            validateInputs(errors);
            creatingProfile(false);
          },
          onSuccess: (response) => {
            console.log(response);
            creatingProfile(false);
            validateInputs({});
            Alert.alert(
              'Info',
              'Your profile has been created!',
              [
                {text: 'OK', onPress: () => Actions.settings()},
              ]
            )
          },
        }
      );
    }
  }
  /**
  * Render
  */

  return(
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.leftText}>
        Photo (Other users can see)
      </Text>
      <Icon
        iconSource={icons.profile_photo}
        iconStyle={iconStyles.centerIcon}
      />
      <Text style={styles.leftText}>
        Name (Other users can see)
      </Text>
      <Input
        styles={inputStyles.input}
        inputIconStyles={inputStyles.icon}
        updateText={(text) => updateName(text)}
        placeholder="Name"
      />
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
      <Input
        styles={inputStyles.input}
        inputIconStyles={inputStyles.icon}
        updateText={(num) => submitPhone(num)}
        placeholder="Phone"
        keyboardType="numeric"
      />
      <Input
        styles={inputStyles.input}
        inputIconStyles={inputStyles.icon}
        updateText={(text) => updateCountry(text)}
        placeholder="Country"
      />
      <Input
        styles={inputStyles.input}
        inputIconStyles={inputStyles.icon}
        updateText={(text) => updateCity(text)}
        placeholder="City"
      />
      <Input
        styles={inputStyles.input}
        inputIconStyles={inputStyles.icon}
        updateText={(num) => submitZip(num)}
        placeholder="Zip"
        keyboardType="numeric"
      />
      <Input
        styles={inputStyles.input}
        inputIconStyles={inputStyles.icon}
        updateText={(text) => updateAdress(text)}
        placeholder="Adress"
      />
      <Text style={styles.leftText}>
        Describe you, your sport experiences and expectations (Other users can see)
      </Text>
      <TextAreaInput
        textAreaStyles={textAreaStyles.textAreaInput}
        textAreaIconStyles={textAreaStyles.textAreaIcon}
        updateText={(text) => updateDescription(text)}
        placeholder="Description"
        defaultValue={description}
        numberOfLines={10}
      />
      {
        errors.errors ?
          errors.errors.map((item, index) => (
            <Text
              style={styles.errorText}
              key={index}
            >
              {item.message}
            </Text>
          ))
            : null
      }
      {
        isCreatingProfile ?
          <ActivityIndicator
            animating={isCreatingProfile}
            style={styles.ActivityIndicator}
          /> : null
      }
      <OpacityButton
        buttonStyles={opacityButtonStyles.submitButton}
        textStyles={opacityButtonStyles.submitText}
        text="SUBMIT"
        handlePress={createUser}
      />

    </ScrollView>
  )
}

CreateProfilePage.propTypes = {
  relay: React.PropTypes.object.isRequired,
  isCreatingProfile: React.PropTypes.bool.isRequired,
  creatingProfile: React.PropTypes.func.isRequired,
  validateInputs: React.PropTypes.func.isRequired,
  updateName: React.PropTypes.func.isRequired,
  updateEmail: React.PropTypes.func.isRequired,
  updatePassword: React.PropTypes.func.isRequired,
  updatePhone: React.PropTypes.func.isRequired,
  updateCountry: React.PropTypes.func.isRequired,
  updateCity: React.PropTypes.func.isRequired,
  updateZip: React.PropTypes.func.isRequired,
  updateAdress: React.PropTypes.func.isRequired,
  updateDescription: React.PropTypes.func.isRequired,
  name: React.PropTypes.string.isRequired,
  email: React.PropTypes.string.isRequired,
  password: React.PropTypes.string.isRequired,
  zip: React.PropTypes.number.isRequired,
  phone: React.PropTypes.number.isRequired,
  description: React.PropTypes.string.isRequired,
  errors: React.PropTypes.object.isRequired,
};

const stateToProps = (state) => ({
  isCreatingProfile: state.sportunityCreateProfile.isCreatingProfile,
  name: state.sportunityCreateProfile.name,
  email: state.sportunityCreateProfile.email,
  password: state.sportunityCreateProfile.password,
  zip: state.sportunityCreateProfile.zip,
  phone: state.sportunityCreateProfile.phone,
  description: state.sportunityCreateProfile.description,
  errors: state.sportunityCreateProfile.errors,
});

const dispatchToProps = (dispatch) => ({
  creatingProfile: bindActionCreators(creatingProfile, dispatch),
  validateInputs: bindActionCreators(validateInputs, dispatch),
  updateName: bindActionCreators(updateName, dispatch),
  updateEmail: bindActionCreators(updateEmail, dispatch),
  updatePassword: bindActionCreators(updatePassword, dispatch),
  updatePhone: bindActionCreators(updatePhone, dispatch),
  updateCountry: bindActionCreators(updateCountry, dispatch),
  updateCity: bindActionCreators(updateCity, dispatch),
  updateZip: bindActionCreators(updateZip, dispatch),
  updateAdress: bindActionCreators(updateAdress, dispatch),
  updateDescription: bindActionCreators(updateDescription, dispatch)

});

const CreateProfileReduxContainer = connect(
  stateToProps,
  dispatchToProps
)(CreateProfilePage);

/**
*  RELAY CONTAINER (HOC)
*/
export default Relay.createContainer(CreateProfileReduxContainer, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        id
      }
    `,
  }
});

// This should be inserted when sports, payment methods, payoff methods are ready

// <LanguageItems />
// <Text style={styles.leftText}>
//   Present your sport and level
// </Text>
// <SportItems />
// <Text style={styles.leftText}>
//   Payment
// </Text>
// <PaymentMethods />
// <Text style={styles.leftText}>
//   Payoff
// </Text>
// <PayoffMethods />
