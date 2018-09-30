import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { IndexPage, CommentPage } from './pages';

const Layout = styled.div`
  background-color: #DDDDDD;
  padding: 2rem;
`;

const App = () => (
  <Layout>
    <BrowserRouter>
      <Switch>
        <Route path="/item/:id" component={CommentPage} />
        <Route path="/:page" component={IndexPage} />
        <Route path="/" component={IndexPage} />
      </Switch>
    </BrowserRouter>
  </Layout>
);

export default App;
