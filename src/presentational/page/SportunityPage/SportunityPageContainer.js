import React, { PropTypes, Component} from 'react';
import Relay from 'react-relay';

import SportunityPage from './SportunityPage';
import UpdateSportunity from '../EventDetailPage/mutation/UpdateSportunity';
import NewSportunityMutation from '../NewActivityPage/Validate/NewSportunityMutation';


class SportunityPageView extends Component{
  _handleScrollLoad = () => {
    // Increments the number of sportunities being rendered by 10.
    console.log(this.props.relay.variables.count + 10)
    this.props.relay.setVariables({
      count: this.props.relay.variables.count + 10
    });
  }

  render(){
    const {viewer:{sportunities}} = this.props;
    return (<SportunityPage showTabBar={true} _handleScrollLoad={this._handleScrollLoad} sportunities={sportunities} />);
  }
}

SportunityPageView.propTypes = {
  viewer: PropTypes.object.isRequired,
};


export const BookedPage =  Relay.createContainer(SportunityPageView, {
  initialVariables: {
    count: 10
  },
  fragments: {
    viewer: () => Relay.QL`
    fragment on Viewer{
      ${UpdateSportunity.getFragment('viewer')}
      sportunities (last: $count, filter:{status: Booked}) {
        ${SportunityPage.getFragment('sportunities')}
      }
    }`
  }
});

export const OrganizedPage =  Relay.createContainer(SportunityPageView, {
  initialVariables: {
    count: 10
  },
  fragments: {
    viewer: () => Relay.QL`
    fragment on Viewer{
      ${NewSportunityMutation.getFragment('viewer')}
      sportunities (last: $count, filter:{status: Organized}) {
        ${SportunityPage.getFragment('sportunities')}
      }
    }`
  }
});

export const SportunitiesPage =  Relay.createContainer(SportunityPageView, {
  initialVariables: {
    count: 10
  },
  fragments: {
    viewer: () => Relay.QL`
    fragment on Viewer{
      ${UpdateSportunity.getFragment('viewer')}
      sportunities (last: $count, filter:{status: Available}) {
        ${SportunityPage.getFragment('sportunities')}
      }
    }`
  }
});
