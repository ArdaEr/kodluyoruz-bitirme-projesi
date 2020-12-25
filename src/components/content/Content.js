import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from '../../Router';

import { Wrapper } from './Content.styles';

const Content = (props) => {

    return (
      <Wrapper>
        <Switch>
          {routes.map((route) =>
              <Route exact={route.exact} path={route.path}>
                {route.component()}
              </Route>
          )}
        </Switch>
      </Wrapper>
    );
  };
  
  export default Content;