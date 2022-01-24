import { Suspense } from 'react';
import {
  Route,
  Switch,
  Redirect,
  useLocation,
  useRouteMatch,
} from 'react-router-dom';
import { NavBar } from '@components';
import { routes } from './routes';

const PublicRoutes = () => {
  const location = useLocation();
  const { url } = useRouteMatch();

  return (
    <Suspense>
      <NavBar />
      <Switch>
        {location.pathname === '/' && (
          <Redirect
            to={{
              pathname: '/countries-list',
            }}
          />
        )}
        {routes?.map((item) => {
          return (
            <Route
              key={item.id}
              exact={item.exact}
              path={url+item.path}
              component={item.component}
            />
          );
        })}
      </Switch>
    </Suspense>
  );
};

export default PublicRoutes;
