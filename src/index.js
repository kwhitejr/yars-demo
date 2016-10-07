import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router/es6';
import { syncHistoryWithStore } from 'react-router-redux';
import { install as offlineInstall } from 'offline-plugin/runtime'; // eslint-disable-line

import routes from 'routes';
import configureStore from 'store';
import 'styles/app.css';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
);

if (process.env.NODE_ENV === 'production') {
  offlineInstall();
}
