import { Icon } from '@components';
import './style.css'
export const Button = ({ onClick, iconName, title, primary }) => {
  const btnStyle = primary ? 'btn-primary-wrapper' : 'btn-wrapper';
  return (
    <div className={btnStyle} onClick={onClick}>
      <Icon name={iconName} />
      <p className='btn-title'> {title}</p>
    </div>
  );
};
