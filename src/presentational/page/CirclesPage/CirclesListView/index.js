import React, { PropTypes, Component } from 'react';
import { View, ScrollView, RefreshControl } from 'react-native';
import Relay from 'react-relay';
import { connect } from 'react-redux';
import { Actions as NavigationActions } from 'react-native-router-flux';

import CirclesItem from '../CirclesItem';

/**
 * TODO Render it properly
 */
class CirclesListView extends Component{

  constructor(props) { 
    super(props);
    this.goToCircle = this.goToCircle.bind(this);
  }
  
  /**
   *
   */
  goToCircle(circle){
    NavigationActions.circledetail({ id: circle.id, title: circle.name});
  }

  /**
   *
   */
  render(){
    const { circles } = this.props;
    return (
      <ScrollView>
        { circles && circles.edges.map((circle, index) => (
            <CirclesItem 
              key={index}
              circle={circle.node}
              goToCircles={this.goToCircle}
              deleteCircle={this.props.deleteCircle}
            />
          ))
        }
      </ScrollView>
    );

  }
}

CirclesListView.propTypes = {
  circles: PropTypes.object,
  deleteCircle: PropTypes.func.isRequired,
};

export default Relay.createContainer(CirclesListView, {
  fragments: {
    circles: () => Relay.QL`
      fragment on CircleConnection{
        edges{
          node{
            ${CirclesItem.getFragment('circle')}
          }  
        }
      }`
  }
});
