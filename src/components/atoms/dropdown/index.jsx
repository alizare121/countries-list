import { useContext } from 'react';
import { ThemeContext } from '@components';
import './style.css';
export const Dropdown = ({ data, placeholder, onSelect }) => {
  const [_, { theme }] = useContext(ThemeContext);
  const style = { backgroundColor: theme.elementBg, color: theme.color };
  return (
    <select
      className='dropdown'
      style={style}
      onChange={(e) => onSelect(e.target.value)}
    >
      <option value='' disabled selected>
        {placeholder}
      </option>
      {data?.map((item) => {
        return <option value={item.value}>{item.title}</option>;
      })}
    </select>
  );
};
