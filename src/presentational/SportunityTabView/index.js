import React, { PropTypes } from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import { scrollableTabSpecificStyles } from './style';

const SportunityTabView = (props) => (
  <ScrollableTabView {...scrollableTabSpecificStyles}>
    {props.children}
  </ScrollableTabView>

);

SportunityTabView.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
};

export default SportunityTabView;
