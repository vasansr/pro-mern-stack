import React from 'react';
import { Link } from 'react-router';

export default class IssueEdit extends React.Component { // eslint-disable-line
  render() {
    return (
      <div>
        <p>This is a placeholder for editing issue {this.props.params.id}.</p>
        <Link to="/issues">Back to issue list</Link>
      </div>
    );
  }
}

IssueEdit.propTypes = {
  params: React.PropTypes.object.isRequired,
};
