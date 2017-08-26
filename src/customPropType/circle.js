import {
  PropTypes
} from 'react';
import user from './user';

export default PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  owner: user,
  members: PropTypes.arrayOf(user).isRequired,
  
});
