import {
  PropTypes
} from 'react';

import TranslatedString from './TranslatedString';

export default PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: TranslatedString.isRequired
});
