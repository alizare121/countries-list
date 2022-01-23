import { routes } from '../../../router/routes';
import { NavBar } from '@components';
import { Switch, Route, useRouteMatch } from 'react-router-dom';


function Home() {
  const { url } = useRouteMatch();
  console.log('routsc', routes, url);
  return (
    <div>
      <NavBar />
      <div>
      ssss
        <Switch>
          {routes &&
            routes.map((item) => {
              return (
                <Route
                  exact={item.exact}
                  path={`${url}/${item.path}`}
                  component={()=> item.component}
                />
              );
            })}
        </Switch>
      </div>
    </div>
  );
}
export default Home;
