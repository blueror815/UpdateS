import {
  PropTypes
} from 'react';

import user from './user';

export default PropTypes.shape({
  id: PropTypes.string.isRequired,
  organizer: user.isRequired,
  isAdmin: PropTypes.bool.isRequired
});
