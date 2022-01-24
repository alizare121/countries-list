import { useContext } from 'react';
import { ThemeContext, Button } from '@components';
import './style.css';

export const NavBar = () => {
  const [toggleTheme, { theme, isDark }] = useContext(ThemeContext);
  const iconName = isDark ? 'sun' : 'moon';
  const modeText = isDark ? 'Light Mode' : 'Dark Mode';
  return (
    <div className='navbar' style={{ backgroundColor: theme.elementBg }}>
      <p className='nav-title'>Where the in World ?</p>
      <Button title={modeText} iconName={iconName} onClick={toggleTheme} />
    </div>
  );
};
