import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { router } from './routers'

function App() {
  return (
    <Switch>
      {router.map(({ component: Component, path, ...rest }) => {
        return <Route component={Component} key={path} {...rest} />;
      })}
    </Switch>
  );
}

export default App;
