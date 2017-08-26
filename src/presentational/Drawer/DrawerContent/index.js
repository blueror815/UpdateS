import React, {
  PropTypes
} from 'react';
import { ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from 'sportunity/src/action/drawerActions';
import { images } from 'sportunity/src/theme';
import DrawerButton from '../../Button/DrawerButton';
import DrawerChatContainer from './chat/DrawerChatContainer';
import styles from './style';

const DrawerContent = ({ switchScene, isLoggedIn, logoutUser }) => {

  return(
    <ScrollView style={styles.container}>
      <Image source={images.logo} style={styles.logo} />
      <DrawerButton text="Sportunities" onPress={() => switchScene('sportunities')} />
      {
        isLoggedIn ?
          <DrawerButton text="My Profile" onPress={() => switchScene('profile')} />
          : null
      }
      { isLoggedIn && <DrawerButton text="My Circles" onPress={() => switchScene('circles')} /> }
      { isLoggedIn && 
        <DrawerChatContainer 
          text="Chats" 
          onPress={() => switchScene('chat')} />
      }
      { isLoggedIn && <DrawerButton text="Notifications" onPress={() => switchScene('notifications')} />}
      { isLoggedIn && <DrawerButton text="History" onPress={() => switchScene('history')} />}
      {
        !isLoggedIn ?
          <DrawerButton text="Settings" onPress={() => switchScene('settings')} />
          : null
      }
      {
        isLoggedIn ?
          <DrawerButton text="Logout" onPress={logoutUser} />
          : null
      }
    </ScrollView>
  )
}

DrawerContent.propTypes = {
  switchScene: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

const stateToProps = (state) => ({
  isLoggedIn: state.sportunityDrawer.isLoggedIn,
});

const dispatchToProps = (dispatch) => ({
  logout: bindActionCreators(logout, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(DrawerContent);
