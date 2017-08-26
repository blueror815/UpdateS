import {
  PropTypes
} from 'react';

import SportunitySummary from './SportunitySummary';

export default PropTypes.shape({
  edges: PropTypes.arrayOf(SportunitySummary).isRequired
});