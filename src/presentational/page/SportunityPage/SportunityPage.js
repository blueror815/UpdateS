import React, { PropTypes, Component } from 'react';
import Relay from 'react-relay';
import { View } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import filterKind from '../../../customPropType/FilterKind';
import kind from '../../../enums/sportunityFilterKinds';
import FloatingMenu from '../../../presentational/Button/FloatingMenu';
import Add from '../../../presentational/Button/Add';
import SportunityFilterKind from './SportunityFilterKind';
import SportunitiesListView from './SportunityListView';
import SportunityItem from './SportunityListView/SportunityItem';
import SportunityMap from './SportunityMap';
import SportunityCalendar from './SportunityCalendar';
import change from '../../../action/changeSportunityFilterKind';
import create from '../../../action/createActivity';

import style, { scrollableTabSpecificStyles } from './style';

const menuOptions = (filtering) => {
  switch (filtering) {

    case kind.organization:
      return (
        <FloatingMenu>
          <Add  Action={Actions.new_activity} />
        </FloatingMenu>
      );

    default:
      return [];
  }
};

/**
 * SportunityPage
 */
class SportunityPage extends Component{
  /**
   *
   */
  constructor(props){
    super(props);


    this.changeKind = this.changeKind.bind(this);
    this._handleScrollLoad = this._handleScrollLoad.bind(this);

  }

  /**
   * @param{slectedKind}
   */
  changeKind(slectedKind) {
    this.props.changeKind(slectedKind);

    if(slectedKind === 'Booked')
      Actions.booked();
    else if(slectedKind === 'Organized')
      Actions.organized();
    else
      Actions.available();

  }

  _handleScrollLoad() {
    this.props._handleScrollLoad();
  }

  /**
   *
   */
  render(){
    const { selectedKind, createActivity, sportunities , showTabBar } = this.props;
    return (

      <View style={style.sportunityPageView}>

        <View style={style.upperHalfPage}>
          <ScrollableTabView style={style.tabView} {...scrollableTabSpecificStyles}>

            <SportunitiesListView updateCount={this._handleScrollLoad} tabLabel="List" sportunities={sportunities} />

            <SportunitiesListView updateCount={this._handleScrollLoad} tabLabel="Calendar" sportunities={sportunities}>
              <SportunityCalendar />
            </SportunitiesListView>

            <SportunitiesListView updateCount={this._handleScrollLoad} tabLabel="Map" sportunities={sportunities}>

              <SportunityMap sportunities={sportunities} />

            </SportunitiesListView>

          </ScrollableTabView>

          {menuOptions(selectedKind, createActivity)}

        </View>
        {
          showTabBar
          ?
          <View>
            <SportunityFilterKind selectedKind={selectedKind} changeKind={this.changeKind} />
          </View>
          :
          null
        }


      </View>
    );
  }
}


SportunityPage.propTypes = {
  // What is the currently selected kind of sportunity
  selectedKind: filterKind.isRequired,
  // What function to call in order to change the selected kind
  changeKind: PropTypes.func.isRequired,
  /**
   * Given an object of type SportunitySumary, it  creates
   * a new activity (sends the message to the store).
   */
  createActivity: PropTypes.func.isRequired,
  // The content to be displayed.
  sportunities: PropTypes.object.isRequired,

  showTabBar: PropTypes.bool.isRequired
};



const SportunityPageContainer = Relay.createContainer(SportunityPage, {
  fragments: {
    sportunities: () => Relay.QL`
    fragment on SportunityConnection{
      ${SportunitiesListView.getFragment('sportunities')}
      ${SportunityMap.getFragment('sportunities')}
    }`
  }
});

const stateToProps = (state) => ({
  selectedKind: state.sportunityList.selectedKind,
});

const dispatchToProps = (dispatch) => ({
  changeKind: (kind) => dispatch(change(kind)),

  /**
   * @param activity {SportunitySummary}
   */
  createActivity: (activity) => dispatch(create(activity))
});

export default connect(stateToProps, dispatchToProps)(SportunityPageContainer);
