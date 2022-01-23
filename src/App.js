import { Router } from 'react-router-dom';
import PublicRoutes from './router/PublicRoutes';
import history from './router/history';
function App() {
  return (
    <Router {...{ history }}>
      <PublicRoutes />
    </Router>
  );
}

export default App;
