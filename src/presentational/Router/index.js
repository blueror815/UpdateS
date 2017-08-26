import React, { Component, PropTypes,} from 'react';
import { Scene, Router, Actions as NavigationActions, } from 'react-native-router-flux';
import RelayRenderer from 'rnrf-relay-renderer';
import RelaySubscriptions from 'relay-subscriptions';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SettingsPage from 'sportunity/src/presentational/page/SettingsPage/SettingsPage.js';
import NewActivityPage from 'sportunity/src/presentational/page/NewActivityPage/NewActivityPage.js';
import CreateProfileContainer from 'sportunity/src/presentational/page/CreateProfilePage/CreateProfileContainer.js';
import ProfileContainer from 'sportunity/src/presentational/page/ProfilePage/ProfileContainer.js';
import SportPage from 'sportunity/src/presentational/page/SportPage/SportPage.js';
import FiltersPage from 'sportunity/src/presentational/page/FiltersPage';
import FilterDetailPage from 'sportunity/src/presentational/page/FilterDetailPage';

import { verifyAuth, logout } from '../../action/drawerActions';
import page from '../page';
import { images } from '../../theme';
import styles from './style';

import conf from 'sportunity/conf/constants.json';
import NetworkLayer from './NetworkLayer';


const {
  CirclesDetailPage,
  EventDetailUserNoLoggedIn,
  EventDetailUserLoggedIn,
  HistoryPage,
  NewCirclePage,
  CirclesPage,
  ChatPage,
  ChatUserContainer,
  ChatSportunityContainer,
  ChatContainer,
  SportunitiesPage,
  BookedPage,
  OrganizedPage,
  SportunitySport,
  NoLoginPage
} = page;

const viewerQueries = {
  viewer: () => Relay.QL`query { viewer }`,
};

class SportunityRouter extends Component{
  constructor(props){
    super(props);
    this.state = {
      loading: false
    }
    this.environment = new RelaySubscriptions.Environment();
  }

  componentDidMount(){
    let config= {};
    this.props.verifyAuth();
    AsyncStorage.getItem('authToken').then((token) => {
      if(token){
        config = { headers: { token: token, } };
      }
      this.environment.injectNetworkLayer(new NetworkLayer(conf.backendUrl, config));
      this.setState({loading: true})
    });
  }


  componentWillReceiveProps(nextProps){
    if(nextProps.isLoggedIn){
      let config= {};
      AsyncStorage.getItem('authToken').then((token) => {
        if(token){
          config = { headers: { token: token, } };
        }
        this.environment.injectNetworkLayer(new NetworkLayer(conf.backendUrl, config));
      });
    }
  }

  render(){
    const isLoggedIn = this.props.isLoggedIn;
    return (
      this.state.loading ?
      <Router
        navigationBarStyle={styles.navBar}
        titleStyle={styles.navBarTitle}
        barButtonTextStyle={styles.barButtonTextStyle}
        wrapBy={RelayRenderer({environment: this.environment})}
      >
        <Scene key="root"  hideTabBar>
          <Scene key="sportunities"
            initial
          >
            <Scene
              key="main"
              tabs
            >
              <Scene
                key="available"
                title="Sportunities"
                component={SportunitiesPage}
                queries={viewerQueries}
                onRight={() => NavigationActions.filters()}
                rightButtonImage={images.filter}
              />
              <Scene key="booked" queries={viewerQueries} component={isLoggedIn ? BookedPage : NoLoginPage } title="Booked"   />
              <Scene key="organized" queries={viewerQueries} component={isLoggedIn ?OrganizedPage : NoLoginPage} title="Organized"   />
            </Scene>
          </Scene>
          <Scene
            key="filters"
            title="Filters"
            component={FiltersPage}
          />
          <Scene
            key="filterdetail"
            title="Filters"
            component={FilterDetailPage}
          />
          <Scene
            key="profile"
            title=""
            component={ProfileContainer}
          />
          <Scene
            key="createProfile"
            title="Create Profile"
            component={CreateProfileContainer}
          />
          <Scene
            key="circles"
            title="Circles"
            component={CirclesPage}
            queries={viewerQueries}
          />
          <Scene
            key="circledetail"
            title="Circle"
            component={CirclesDetailPage}
            queries={viewerQueries}
          />
          <Scene
            key="newCircle"
            title="new Circle"
            component={NewCirclePage}
            queries={viewerQueries}
          />
          <Scene
            key="chat"
            title="Chat"
            component={ChatPage}
            queries={viewerQueries}
          />
          <Scene
            key="chatdetail"
            title="Chat"
            component={ChatContainer}
            queries={viewerQueries}
          />
          <Scene
            key="chatsportunity"
            title="Chat"
            component={ChatSportunityContainer}
            queries={viewerQueries}
          />
          <Scene
            key="chatuser"
            title="Chat"
            component={ChatUserContainer}
            queries={viewerQueries}
          />
          <Scene
            key="history"
            title="History"
            component={HistoryPage}
            queries={viewerQueries}
          />
          <Scene
            key="settings"
            title="Settings"
            component={SettingsPage}
          />
          <Scene
            key="new_activity"
            title="New Activity"
            component={NewActivityPage}
            queries={viewerQueries}
          />
          <Scene
            key="sports"
            title="Sports"
            component={SportPage}
          />
          <Scene
            key="eventdetail"
            title="Event Detail"
            component={isLoggedIn ? EventDetailUserLoggedIn : EventDetailUserNoLoggedIn}
            queries={viewerQueries}
          />

        </Scene>
      </Router>
      :
      null
    )
  }
}

const stateToProps = (state) => ({
  isLoggedIn: state.sportunityDrawer.isLoggedIn
});
const dispatchToProps = (dispatch) => ({
  verifyAuth: bindActionCreators(verifyAuth, dispatch),
});

SportunityRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default connect(stateToProps,dispatchToProps)(SportunityRouter);
