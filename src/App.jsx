import 'babel-polyfill';
import React from 'react';

import Header from './Header.jsx';

const App = (props) => (
  <div>
    <Header />
    <div className="container-fluid">
      {props.children}
      <hr />
      <h5><small>
        Full source code available at this <a href="https://github.com/vasansr/pro-mern-stack">
        GitHub repository</a>.
      </small></h5>
    </div>
  </div>
);

App.propTypes = {
  children: React.PropTypes.object.isRequired,
};

export default App;
