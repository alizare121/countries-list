import fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faMoon,
  faArrowLeft,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
export const Icon = ({ name }) => {
  fontawesome.library.add(faSearch, faMoon, faArrowLeft, faSun);
  return <FontAwesomeIcon icon={name} />;
};
