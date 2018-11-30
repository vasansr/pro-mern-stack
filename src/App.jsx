import 'babel-polyfill';
import React from 'react';

<<<<<<< HEAD
import IssueList from './IssueList.jsx';
import IssueEdit from './IssueEdit.jsx';
import Graph from './Graph.jsx';
=======
import Header from './Header.jsx';
>>>>>>> master

export default class App extends React.Component {
  static dataFetcher({ urlBase, cookie }) {
    const headers = cookie ? { headers: { Cookie: cookie } } : null;
    return fetch(`${urlBase || ''}/api/users/me`, headers).then(response => {
      if (!response.ok) return response.json().then(error => Promise.reject(error));
      return response.json().then(data => ({ App: data }));
    });
  }

<<<<<<< HEAD
const RoutedApp = () => (
  <Router history={hashHistory} >
    <Route path="/" component={IssueList} />
    <Route path="/issueEdit" component={IssueEdit} />
    <Route path="/Graph" component={Graph} />
    <Route path="*" component={NoMatch} />
  </Router>
);
=======
  constructor(props, context) {
    super(props, context);
    const user = context.initialState.App ? context.initialState.App : {};
    this.state = {
      user,
    };
    this.onSignin = this.onSignin.bind(this);
    this.onSignout = this.onSignout.bind(this);
  }
>>>>>>> master

  componentDidMount() {
    App.dataFetcher({ })
    .then(data => {
      const user = data.App;
      this.setState({ user });
    });
  }

  onSignin(name) {
    this.setState({ user: { signedIn: true, name } });
  }

  onSignout() {
    this.setState({ user: { signedIn: false, name: '' } });
  }

  render() {
    const childrenWithUser = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { user: this.state.user })
    );
    return (
      <div>
        <Header user={this.state.user} onSignin={this.onSignin} onSignout={this.onSignout} />
        <div className="container-fluid">
          {childrenWithUser}
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

App.contextTypes = {
  initialState: React.PropTypes.object,
};
