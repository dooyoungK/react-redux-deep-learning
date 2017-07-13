import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';

import requireAuth from './components/require_authentication';
import Resources from './components/resources';
import UserList from './components/user_list';

import App from './components/app';
import Async from './middlewares/async';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(Async)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="resources" component={requireAuth(Resources)} />
            <Route path="users" component={UserList} />
        </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
