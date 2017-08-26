import React,{ PropTypes, Component } from 'react';
import Relay from 'react-relay';

import EventDetailPageView from './EventDetailPageView';

const EventDetail = ({ viewer }) => {
  console.log()
  return (
    <EventDetailPageView viewer={viewer} sportunity={viewer.sportunity} user={viewer.me} />
  );
};

EventDetail.propTypes = {
  viewer: PropTypes.object.isRequired
};


const stateToProps = (state) => ({
  isLoggedIn: state.sportunityDrawer.isLoggedIn,
});

export const EventDetailUserLoggedIn =  Relay.createContainer(EventDetail, {
  initialVariables: {
    id: ''
  },
  fragments: {
    viewer: () => Relay.QL`fragment on Viewer{
      ${EventDetailPageView.getFragment('viewer')}
      me{
      	${EventDetailPageView.getFragment('user')}
      }
      sportunity(id: $id) {
      	${EventDetailPageView.getFragment('sportunity')}
      }
    }`
  },
});

export const EventDetailUserNoLoggedIn =  Relay.createContainer(EventDetail, {
  initialVariables: {
    id: ''
  },
  fragments: {
    viewer: () => Relay.QL`fragment on Viewer{
      ${EventDetailPageView.getFragment('viewer')}
      sportunity(id: $id) {
      	${EventDetailPageView.getFragment('sportunity')}
      }
    }`
  },
});



