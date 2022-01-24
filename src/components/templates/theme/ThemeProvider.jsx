import { createContext, useState, useEffect } from 'react';

const themes = {
  dark: {
    backgroundColor: 'hsl(207, 26%, 17%)',
    color: 'hsl(0, 0%, 100%)',
    elementBg: ' hsl(209, 23%, 22%)',
  },
  light: {
    backgroundColor: 'hsl(0, 0%, 98%)',
    color: 'hsl(200, 15%, 8%)',
    input: 'hsl(0, 0%, 52%)',
    elementBg: 'hsl(0, 0%, 100%)',
  },
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    localStorage.setItem('isDark', JSON.stringify(!isDark));
    setIsDark(!isDark);
  };
  const theme = isDark ? themes.dark : themes.light;

  useEffect(() => {
    const isDark = localStorage.getItem('isDark') === 'true';
    setIsDark(isDark);
  }, []);

  return (
    <ThemeContext.Provider value={[toggleTheme, { theme, isDark }]}>
      <div
        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.color,
          minHeight: '100vh',
        }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
