import 'babel-polyfill';
import React from 'react';

import Header from './Header.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { loggedIn: false, name: '' },
    };
    this.onLogin = this.onLogin.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  onLogin(name) {
    this.setState({ user: { loggedIn: true, name } });
  }

  onLogout() {
    this.setState({ user: { loggedIn: false, name: '' } });
  }

  render() {
    return (
      <div>
        <Header user={this.state.user} onLogin={this.onLogin} onLogout={this.onLogout} />
        <div className="container-fluid">
          {this.props.children}
          <hr />
          <h5><small>
            Full source code available at this <a href="https://github.com/vasansr/pro-mern-stack">
            GitHub repository</a>.
          </small></h5>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object.isRequired,
};
