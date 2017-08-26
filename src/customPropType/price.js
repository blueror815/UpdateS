import {
  PropTypes
} from 'react';

export default PropTypes.shape({
  currency: PropTypes.string.isRequired,
  cents: PropTypes.number.isRequired
});
