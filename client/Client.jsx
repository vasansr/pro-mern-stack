import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import routes from '../src/Routes.jsx';
import ContextWrapper from '../src/ContextWrapper.jsx';

const WrappedApp = (props) => (
  <ContextWrapper {...props}>
    <Router history={browserHistory} >
      {routes}
    </Router>
  </ContextWrapper>
);


const contentNode = document.getElementById('contents');
ReactDOM.render(<WrappedApp initialState={window.__INITIAL_STATE__} />, contentNode);

if (module.hot) {
  module.hot.accept();
}
