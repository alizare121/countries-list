import { ThemeContext, Icon } from '@components';
import { useContext } from 'react';
import { Router } from 'react-router-dom';
import PrivateRoutes from './router/PrivateRoutes';
import history from './router/history';
function App() {
  const [toggleTheme] = useContext(ThemeContext);
  return (
    <Router {...{ history }}>
      <PrivateRoutes />
    </Router>
  );
}

export default App;
