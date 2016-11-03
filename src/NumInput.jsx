import React from 'react';

export default class NumInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: this.format(props.value) };
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({ value: this.format(newProps.value) });
  }

  onBlur(e) {
    this.props.onChange(e, this.unformat(this.state.value));
  }

  onChange(e) {
    if (e.target.value.match(/^\d*$/)) {
      this.setState({ value: e.target.value });
    }
  }

  format(num) {
    return num != null ? num.toString() : '';
  }

  unformat(str) {
    const val = parseInt(str, 10);
    return isNaN(val) ? null : val;
  }

  render() {
    return (
      <input
        type="text" {...this.props} value={this.state.value}
        onBlur={this.onBlur} onChange={this.onChange}
      />
    );
  }
}

NumInput.propTypes = {
  value: React.PropTypes.number,
  onChange: React.PropTypes.func.isRequired,
};
