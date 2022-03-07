import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './pages/routes';
import GlobalStyle from './styles/globalStyles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        {routes.map(({ component: Component, path, ...rest }) => {
          return (
            <Route
              render={(props) => (
                <React.Suspense fallback={'loading...'}>
                  <Component {...props} />
                </React.Suspense>
              )}
              key={path}
              {...rest}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
