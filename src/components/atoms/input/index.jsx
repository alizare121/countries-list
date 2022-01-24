import { useContext } from 'react';
import { ThemeContext, Icon } from '@components';
import './style.css';
export const Input = ({ onChange, placeholder, value }) => {
  const [_, { theme }] = useContext(ThemeContext);
  const style = {
    backgroundColor: theme.elementBg,
    color: theme.color,
    placeholder: theme.color,
  };
  return (
    <div className='input-wrapper' style={style}>
      <Icon name='search' />
      <input
        className='search-input'
        type='text'
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={style}
        value={value}
      />
    </div>
  );
};
