import React from 'react';
import { NavItem, Modal, NavDropdown, MenuItem, Button } from 'react-bootstrap';

class LoginNavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.logout = this.logout.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
  }

  onSuccess(googleUser, test) {
    // this.hideModal();
    console.log('On Success', googleUser, test);
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id_token: googleUser.getAuthResponse().id_token }),
    }).then(response => {
      console.log('Post response', response);
      if (response.ok) {
        response.json().then(user => {
          console.log('Post response json', user);
          this.props.onLogin(user.name);
        });
      } else {
        response.json().then(error => {
          this.props.showError(`App login failed: ${error}`);
        });
      }
    })
    .catch(err => {
      this.props.showError(`Error posting login to app ${err}`);
    });
  }

  onFailure() {
    this.props.showError('Login failed');
  }

  logout() {
    // console.log('user signing out');
    const auth2 = gapi.auth2.getAuthInstance();   //eslint-disable-line
    console.log('Is signed in', auth2.isSignedIn.get());
    auth2.signOut().then(() => {
      this.props.showSuccess('User signed out.');
      this.props.onLogout();
    });
    this.hideModal();
  }

  showModal() {
    this.setState({ showing: true }, () => {
      window.gapi.signin2.render('signin', {
        scope: 'profile email',
        width: 240,
        height: 50,
        longtitle: true,
        theme: 'dark',
        onsuccess: this.onSuccess,
        onfailure: this.onFailure,
      });
    });
  }

  hideModal() {
    this.setState({ showing: false });
  }

  render() {
    if (this.props.user.loggedIn) {
      return (
        <NavDropdown id="user-dropdown" title={this.props.user.name}>
          <MenuItem onClick={this.logout}>Logout</MenuItem>
        </NavDropdown>
      );
    }
    return (
      <NavItem onClick={this.showModal}>Login
        <Modal keyboard show={this.state.showing} onHide={this.hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div id="signin" className="g-signin2"></div>
            <Button onClick={this.logout}>Logout</Button>
          </Modal.Body>
        </Modal>
      </NavItem>
    );
  }
}

LoginNavItem.propTypes = {
  router: React.PropTypes.object,
  user: React.PropTypes.object,
  onLogin: React.PropTypes.func.isRequired,
  onLogout: React.PropTypes.func.isRequired,
  showError: React.PropTypes.func.isRequired,
  showSuccess: React.PropTypes.func.isRequired,
};

export default LoginNavItem;
