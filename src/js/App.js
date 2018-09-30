import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { IndexPage, CommentPage } from './pages';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/item/:id" component={CommentPage} />
      <Route path="/" component={IndexPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
