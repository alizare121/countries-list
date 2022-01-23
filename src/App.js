import { ThemeContext, Icon } from '@components';
import { useContext } from 'react';
import { Router } from 'react-router-dom';
import PublicRoutes from './router/PublicRoutes';
import history from './router/history';
function App() {
  const [toggleTheme] = useContext(ThemeContext);
  return (
    <Router {...{ history }}>
      <PublicRoutes />
    </Router>
  );
}

export default App;
