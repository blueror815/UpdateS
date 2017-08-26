import {
  PropTypes
} from 'react';

const SportLevel = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skillLevel: PropTypes.number.isRequired
};

export default PropTypes.shape({
  FR: SportLevel,
  EN: SportLevel,
  DE: SportLevel,
  ES: SportLevel
});

