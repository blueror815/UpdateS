import React, { PropTypes, Component} from 'react';
import Relay from 'react-relay';

import SportunityPage from '../SportunityPage/SportunityPage';


export class SportunityPageView extends Component{
  _handleScrollLoad = () => {
    // Increments the number of sportunities being rendered by 10.
    this.props.relay.setVariables({
      count: this.props.relay.variables.count + 10
    });
  }

  render(){
    const {viewer:{sportunities}} = this.props;
    return (<SportunityPage showTabBar={false} _handleScrollLoad={this._handleScrollLoad} sportunities={sportunities} />);
  }
}

SportunityPageView.propTypes = {
  viewer: PropTypes.object.isRequired,
};

export default  Relay.createContainer(SportunityPageView, {
  initialVariables: {
    count: 10
  },
  fragments: {
    viewer: () => Relay.QL`
    fragment on Viewer{
      sportunities (last: $count) {
        ${SportunityPage.getFragment('sportunities')}
      }
    }`
  }
});
