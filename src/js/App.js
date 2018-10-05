import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { injectGlobal } from 'styled-components';
import { Provider } from 'react-redux';

import { IndexPage, CommentPage } from './pages';
import { Layout } from './components';
import { STORIES_TYPE } from './constants';
import store from './store';

// eslint-disable-next-line
injectGlobal`
  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
  }
`;

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/item/:id" component={CommentPage} />
          <Route
            path="/newstories/:page?"
            render={props => <IndexPage {...props} storyType={STORIES_TYPE.NEW_STORIES} />}
          />
          <Route
            path="/beststories/:page?"
            render={props => <IndexPage {...props} storyType={STORIES_TYPE.BEST_STORIES} />}
          />
          <Route
            path="/:page?"
            render={props => <IndexPage {...props} storyType={STORIES_TYPE.TOP_STORIES} />}
          />
        </Switch>
      </Layout>
    </BrowserRouter>
  </Provider>
);

export default App;
