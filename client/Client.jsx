import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from '../src/HelloWorld.jsx';

const contentNode = document.getElementById('contents');
ReactDOM.render(<HelloWorld />, contentNode);

if (module.hot) {
  module.hot.accept();
}
