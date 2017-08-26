import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { verifyAuth, logout } from 'sportunity/src/action/drawerActions';
import { Actions as NavigationActions } from 'react-native-router-flux';

import DrawerContent from './DrawerContent';
import Router from '../Router';
import styles from './style';

/**
 * This class is responsible to render the drawer of the application
 */
class NavigationDrawer extends Component {

  /**
   * Go to the specified scene
   *
   * @param {string} target the key of the scene to go to
   */
  switchScene(target) {
    this._drawer.close();
    NavigationActions[target]({type: 'reset'});
  }

  componentDidMount = () => {
    this.props.verifyAuth();
  }

  logoutUser = () => {
    this.props.logout();
    this._drawer.close();
    NavigationActions['sportunities']({type: 'reset'});
  }

  /**
   * Render the component
   */
  render() {
    return (
      <Drawer
        ref={(ref) => { this._drawer = ref; }}
        type="displace"
        content={
          <DrawerContent
            switchScene={(target) => this.switchScene(target)}
            logoutUser={this.logoutUser}
          />
        }
        styles={styles}
        tapToClose
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        negotiatePan
        acceptPan={false}
        captureGestures
        tweenHandler={ratio => ({
          main: { opacity: Math.max(0.54, 1 - ratio) },
        })}
      >
        <Router />
      </Drawer>
    );
  }
}

NavigationDrawer.propTypes = {
  verifyAuth: React.PropTypes.func.isRequired,
  logout: React.PropTypes.func.isRequired
}

const stateToProps = (state) => ({
  isLoggedIn: state.sportunityDrawer.isLoggedIn,
});

const dispatchToProps = (dispatch) => ({
  verifyAuth: bindActionCreators(verifyAuth, dispatch),
  logout: bindActionCreators(logout, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(NavigationDrawer);
