import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from '../src/HelloWorld.jsx';

const contentNode = document.getElementById('contents');
/* eslint no-underscore-dangle: 0 */
ReactDOM.render(<HelloWorld {...window.__INITIAL_STATE__} />, contentNode);

if (module.hot) {
  module.hot.accept();
}
