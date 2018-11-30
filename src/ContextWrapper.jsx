import React from 'react';

export default class ContextWrapper extends React.Component {
  getChildContext() {
    return { initialState: this.props.initialState };
  }

  render() {
    return this.props.children;
  }
}

ContextWrapper.childContextTypes = {
  initialState: React.PropTypes.object,
};

ContextWrapper.propTypes = {
  children: React.PropTypes.object.isRequired,
  initialState: React.PropTypes.object,
};
