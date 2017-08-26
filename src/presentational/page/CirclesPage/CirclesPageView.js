import React, { PropTypes, Component } from 'react';
import Relay from 'react-relay';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { ViewerRoute } from '../../../routes/ViewerRoute';
import FloatingMenu from '../../../presentational/Button/FloatingMenu';
import Add from '../../../presentational/Button/Add';
import CirclesListView from './CirclesListView';
import DeleteCircleMutation from  './mutation/DeleteCircle';
import NewCircleMutation from '../NewCirclePage/NewCircleMutation';


import style from './style';

class CirclesPage extends Component{
  
  constructor(props, context) {
    super(props, context);

  }

  deleteCircle = (circle) => {
    const { relay, viewer,  } = this.props;

    relay.commitUpdate(
      new DeleteCircleMutation({ viewer, circle }),
      {
        onFailure: error => console.log(error.getError()),
        onSuccess: (response) => {
          console.log(response)
        },
      }
    );
  }


  render(){
    const { viewer:{circles} } = this.props;
    return (
      <View style={style.container}>
        <CirclesListView 
          deleteCircle={this.deleteCircle}
          circles={circles} />
        <FloatingMenu>
          <Add Action={Actions.newCircle} />
        </FloatingMenu>
      </View>
    )

  }
}

CirclesPage.propTypes = {
  viewer: PropTypes.object,
  relay: React.PropTypes.object.isRequired
};

export default Relay.createContainer(CirclesPage, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer{
        id,
        circles (last: 10) {
          ${CirclesListView.getFragment('circles')}
        }
        ${NewCircleMutation.getFragment('viewer')}
        ${DeleteCircleMutation.getFragment('viewer')}
      }`
  }
});
