import {
  PropTypes
} from 'react';

import user from './user';

export default PropTypes.shape({
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  author: user
});