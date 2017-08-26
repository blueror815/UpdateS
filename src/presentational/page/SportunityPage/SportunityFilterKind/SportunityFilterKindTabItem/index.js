import React, { PropTypes } from 'react';
import { Text, TouchableHighlight } from 'react-native';

import {
  underlayColor,
  selectedStyle,
  nonSelectedStyle
} from './style';


const SportunityFilterKindTabItem = ({ description, selected, action }) => {
  const style = selected ? selectedStyle : nonSelectedStyle;

  return (
    <TouchableHighlight
      onPress={() => action()}
      underlayColor={underlayColor}
      style={style.container}
    >
      <Text
        style={style.text}
      >
        {description}

      </Text>
    </TouchableHighlight>
  );
};

SportunityFilterKindTabItem.propTypes = {
  /**
   * Content to be displayed within the tab
   */
  description: PropTypes.string.isRequired,
  /**
   * Whether this tab is currently selected
   */
  selected: PropTypes.bool.isRequired,
  /**
   * Function called when pressed
   */
  action: PropTypes.func.isRequired
};

export default SportunityFilterKindTabItem;
