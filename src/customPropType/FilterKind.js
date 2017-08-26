import {
  PropTypes
} from 'react';

import kind from '../enums/sportunityFilterKinds';

export default PropTypes.oneOf(Object.values(kind));

