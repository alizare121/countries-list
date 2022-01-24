import { Icon } from '@components';
import { useContext } from 'react';
import { ThemeContext } from '@components';
import './style.css';
export const Button = ({ onClick, iconName, title, primary }) => {
  const [_, { theme }] = useContext(ThemeContext);
  const btnStyle = primary ? 'btn-wrapper btn-primary-wrapper' : 'btn-wrapper';
  const style = {
    backgroundColor: theme.elementBg,
    color: theme.color,
  };
  return (
    <div className={btnStyle} onClick={onClick} style={style}>
      <Icon name={iconName} />
      <p className='btn-title'> {title}</p>
    </div>
  );
};
