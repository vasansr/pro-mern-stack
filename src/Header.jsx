import React from 'react';
import { Navbar, Nav, NavItem, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { withRouter } from 'react-router';
import Select from 'react-select';

import IssueAddNavItem from './IssueAddNavItem.jsx';
import SigninNavItem from './SigninNavItem.jsx';

import withToast from './withToast.jsx';

const Header = (props) => {
  function searchIssues(input) {
    if (input.length < 2) return Promise.resolve({ options: [] });

    return fetch(`/api/issues?search=${input}`).then(response => {
      if (!response.ok) return response.json().then(error => Promise.reject(error));
      return response.json().then(data => {
        const options = data.records.map(issue => ({
          value: issue._id,
          label: `${issue._id.substr(-4)}: ${issue.title}`,
        }));
        return { options };
      }).catch(error => {
        this.props.showError(`Error fetching data from server: ${error}`);
      });
    });
  }

  function filterOptions(options) {
    return options;
  }

  function selectIssue(item) {
    if (item) props.router.push(`/issues/${item.value}`);
  }

  return (
    <Navbar fluid>
      <Col sm={5}>
        <Navbar.Header>
          <Navbar.Brand>Issue Tracker</Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <LinkContainer to="/issues">
            <NavItem>Issues</NavItem>
          </LinkContainer>
          <LinkContainer to="/reports">
            <NavItem>Reports</NavItem>
          </LinkContainer>
        </Nav>
      </Col>
      <Col sm={4}>
        <div style={{ paddingTop: 8 }}>
          <Select.Async
            instanceId="search" placeholder="Search ..." autoload={false} cache={false}
            loadOptions={searchIssues} filterOptions={filterOptions} onChange={selectIssue}
          />
        </div>
      </Col>
      <Col sm={3}>
        <Nav pullRight>
          {props.user.signedIn ? <IssueAddNavItem showError={props.showError} /> : null}
          <SigninNavItem
            user={props.user} onSignin={props.onSignin} onSignout={props.onSignout}
            showError={props.showError} showSuccess={props.showSuccess}
          />
        </Nav>
      </Col>
    </Navbar>
  );
};

Header.propTypes = {
  showError: React.PropTypes.func.isRequired,
  showSuccess: React.PropTypes.func.isRequired,
  onSignin: React.PropTypes.func.isRequired,
  onSignout: React.PropTypes.func.isRequired,
  user: React.PropTypes.object,
  router: React.PropTypes.object,
};

export default withRouter(withToast(Header));
