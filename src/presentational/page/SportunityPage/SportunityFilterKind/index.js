import React, { PropTypes } from 'react';
import { View } from 'react-native';

import filterKind from '../../../../../src/customPropType/FilterKind';
import SportunityFilterKindTabItem from './SportunityFilterKindTabItem';

import style from './style';

// List of tuples containing kind and description for
// each tab:

const tabs = [
  [
    'Available',      // 1º Kind
    'Sportunity'   // 2º Description
  ],
  [
    'Booked',
    'Booked'
  ],
  /*[
    'Organized',
    'Organization'
  ],*/
  [
    'Organized',
    'Organized'
  ]
];

const SportunityFilterKind = ({ selectedKind, changeKind }) => (
  <View style={style.tabContainer}>

    { tabs.map(([kind, desc], index) =>
      <SportunityFilterKindTabItem
        key={index}
        description={desc}
        kind={kind}
        selected={kind === selectedKind}
        action={() => changeKind(kind)}
      />
      )
    }

  </View>
);


SportunityFilterKind.propTypes = {
  // What is the currently selected kind of sportunity
  selectedKind: filterKind.isRequired,
  // What function to call in order to change the selected kind
  changeKind: PropTypes.func.isRequired
};

export default SportunityFilterKind;
