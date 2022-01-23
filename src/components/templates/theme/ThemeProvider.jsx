import { createContext, useState, useEffect } from 'react';

const themes = {
  dark: {
    backgroundColor: 'hsl(207, 26%, 17%)',
    color: 'hsl(0, 0%, 100%)',
  },
  light: {
    backgroundColor: 'hsl(0, 0%, 98%)',
    color: 'hsl(200, 15%, 8%)',
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
      <body
        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.color,
          height: '100vh',
        }}>
        {children}
      </body>
    </ThemeContext.Provider>
  );
};
