import { lazy, Suspense } from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';

const Home = lazy(() => import('../components/pages/Home'));

const PrivateRoutes = () => {
  const location = useLocation();
  return (
    <Suspense>
      <Switch>
        {location.pathname === '/' && (
          <Redirect
            to={{
              pathname: '/home',
            }}
          />
        )}
        <Route path='/home'>
          <Home />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default PrivateRoutes;
