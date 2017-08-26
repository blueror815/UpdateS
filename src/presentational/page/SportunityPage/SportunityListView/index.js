import React, { PropTypes, Component } from 'react';
import { View, ScrollView, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import { Actions as NavigationActions } from 'react-native-router-flux';
import Relay from 'react-relay';
import SportunitySummary from '../../../../../src/customPropType/SportunitySummary';
import SportunityItem from './SportunityItem';

import { updateStatusSportunity } from '../../../../action/sportunityAction';
import { colors, metrics } from '../../../../theme';
import styles from './style';

// TODO: once it is more developed, event and sportunitySumary would not probably be
// the same type, but so far it contains all the info we need.
/**
 * TODO Render it properly
 *
 * You get a list of sportunities and you render them in a map
 *
 */
class SportunitiesListView extends Component{
  /**
  *
  */
  constructor(props){
    super(props);
    this.state = { 
      isRefreshing: false,
    };
  }

  _onRefresh = () => { 
    this.setState({isRefreshing: true}); 
    setTimeout(() => {
      this.setState({ isRefreshing: false,});
      this.props.updateCount();
    }, 2000); 
  }

  /**
   *
   */
  switchPage = (event, status, color) => {
    this.props.updateStatusSportunity(status, color);
    NavigationActions.eventdetail({ id: event.id, title: event.title });
  }

  /**
   *
   */
  render(){
    const { sportunities, children } = this.props;
    return (
      <View style={styles.container}>
        { children }
        <ScrollView
          refreshControl={ <RefreshControl 
            refreshing={this.state.isRefreshing} 
            onRefresh={this._onRefresh} 
            tintColor={colors.blue}
            title="Loading..." 
            titleColor={colors.blue}
            colors={['#ff0000', colors.skyBlue, colors.darkBlue]} 
            progressBackgroundColor={colors.darkBlue} /> 
          }
        >
          { sportunities && sportunities.edges.reverse().map((sportunity, index) =>

            <View key={index} style={styles.markerOverlayContainer}>
              <SportunityItem sportunity={sportunity.node} onPress={this.switchPage} />
            </View>
            )
          }
        </ScrollView>
      </View>
    );

  }
}

SportunitiesListView.propTypes = {
  sportunities: PropTypes.object.isRequired,
  // Element/s to show as header of the list of sportunities.
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element.isRequired)
  ]),
  updateStatusSportunity: PropTypes.func.isRequired
};

const SportunitiesListViewContainer = Relay.createContainer(SportunitiesListView, {
  fragments: {
    sportunities: () => Relay.QL`
      fragment on SportunityConnection{
        edges{
          node{
            ${SportunityItem.getFragment('sportunity')}
          }
        }
      }`
  }
});

const dispatchToProps = (dispatch) => ({

  /**
   * @param status {String} color {String}
   */
  updateStatusSportunity: (status, color) => dispatch(updateStatusSportunity(status, color))
});

export default connect(
  null,
  dispatchToProps
)(SportunitiesListViewContainer);


