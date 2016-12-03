import React from 'react';
import { NavItem, Modal, Button, NavDropdown, MenuItem } from 'react-bootstrap';

import config from '../config.js';

export default class SigninNavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: false, disabled: true,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.signout = this.signout.bind(this);
    this.signin = this.signin.bind(this);
  }

  componentDidMount() {
    window.gapi.load('auth2', () => {
      if (!window.gapi.auth2.getAuthInstance()) {
        window.gapi.auth2.init({ client_id: config.googleClientId });
      }
      this.setState({ disabled: false });
    });
  }

  signin() {
    this.hideModal();
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signIn().then(googleUser => {
      this.props.onSignin(googleUser.getBasicProfile().getGivenName());
    }, error => {
      this.props.showError(`Error authenticating with Google: ${error}`);
    });
  }

  signout() {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      this.props.showSuccess('Successfully signed out.');
      this.props.onSignout();
    });
  }

  showModal() {
    this.setState({ showing: true });
  }

  hideModal() {
    this.setState({ showing: false });
  }

  render() {
    if (this.props.user.signedIn) {
      return (
        <NavDropdown title={this.props.user.name} id="user-dropdown">
          <MenuItem onClick={this.signout}>Sign out</MenuItem>
        </NavDropdown>
      );
    }
    return (
      <NavItem onClick={this.showModal}>Sign in
        <Modal keyboard show={this.state.showing} onHide={this.hideModal} bsSize="sm">
          <Modal.Header closeButton>
            <Modal.Title>Sign in</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Button block disabled={this.state.disabled} onClick={this.signin}>
              <img src="/btn_google_signin_dark_normal_web.png" alt="Sign in" />
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

SigninNavItem.propTypes = {
  user: React.PropTypes.object,
  onSignin: React.PropTypes.func.isRequired,
  onSignout: React.PropTypes.func.isRequired,
  showError: React.PropTypes.func.isRequired,
  showSuccess: React.PropTypes.func.isRequired,
};
