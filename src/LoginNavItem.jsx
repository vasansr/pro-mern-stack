import React from 'react';
import { NavItem, Modal, Button, NavDropdown, MenuItem } from 'react-bootstrap';

import config from '../config.js';

class LoginNavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: false, disabled: true,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
  }

  componentDidMount() {
    window.gapi.load('auth2', () => {
      if (!window.gapi.auth2.getAuthInstance()) {
        window.gapi.auth2.init({ client_id: config.googleClientId });
      }
      this.setState({ disabled: false });
    });
  }

  login() {
    this.hideModal();
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signIn().then(googleUser => {
      fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id_token: googleUser.getAuthResponse().id_token }),
      }).then(response => {
        if (response.ok) {
          response.json().then(user => {
            this.props.onLogin(user.name);
          });
        } else {
          response.json().then(error => {
            this.props.showError(`App login failed: ${error}`);
          });
        }
      })
      .catch(err => {
        this.props.showError(`Error posting login to app: ${err}`);
      });
    }, error => {
      this.props.showError(`Error authenticating with Google: ${error}`);
    });
  }

  logout() {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      this.props.showSuccess('User signed out.');
      this.props.onLogout();
    });
  }

  showModal() {
    this.setState({ showing: true });
  }

  hideModal() {
    this.setState({ showing: false });
  }

  render() {
    if (this.props.user.loggedIn) {
      return (
        <NavDropdown title={this.props.user.name} id="user-dropdown">
          <MenuItem onClick={this.logout}>Logout</MenuItem>
        </NavDropdown>
      );
    }
    return (
      <NavItem onClick={this.showModal}>Login
        <Modal keyboard show={this.state.showing} onHide={this.hideModal} bsSize="sm">
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Button block disabled={this.state.disabled} onClick={this.login}>
              <img src="/btn_google_signin_dark_normal_web.png" alt="Sign In" />
            </Button>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="link" onClick={this.hideModal}>Cancel</Button>
          </Modal.Footer>
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
