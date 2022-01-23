import fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faMoon,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
export const Icon = ({ name }) => {
  fontawesome.library.add(faSearch, faMoon, faArrowLeft);
  return <FontAwesomeIcon icon={name} />;
};
