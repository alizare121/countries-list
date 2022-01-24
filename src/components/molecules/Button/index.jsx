import { Icon } from '@components';
import { useContext } from 'react';
import { ThemeContext } from '@components';
import './style.css'
export const Button = ({ onClick, iconName, title, primary }) => {
  const [_, { theme }] = useContext(ThemeContext);
  const btnStyle = primary ? 'btn-wrapper btn-primary-wrapper' : 'btn-wrapper';
  return (
    <div className={btnStyle} onClick={onClick}>
      <Icon name={iconName} />
      <p className='btn-title'> {title}</p>
    </div>
  );
};
