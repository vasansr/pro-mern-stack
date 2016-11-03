import React from 'react';

export default class DateInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: this.editFormat(props.value), focused: false, valid: true };
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.value !== this.props.value) {
      this.setState({ value: this.editFormat(newProps.value) });
    }
  }

  onFocus() {
    this.setState({ focused: true });
  }

  onBlur(e) {
    const value = this.unformat(this.state.value);
    const valid = this.state.value === '' || value != null;
    if (valid !== this.state.valid && this.props.onValidityChange) {
      this.props.onValidityChange(e, valid);
    }
    this.setState({ focused: false, valid });
    if (valid) this.props.onChange(e, value);
  }

  onChange(e) {
    if (e.target.value.match(/^[\d-]*$/)) {
      this.setState({ value: e.target.value });
    }
  }

  displayFormat(date) {
    return (date != null) ? date.toDateString() : '';
  }

  editFormat(date) {
    return (date != null) ? date.toISOString().substr(0, 10) : '';
  }

  unformat(str) {
    const val = new Date(str);
    return isNaN(val.getTime()) ? null : val;
  }

  render() {
    const className = (!this.state.valid && !this.state.focused) ? 'invalid' : null;
    const value = (this.state.focused || !this.state.valid) ? this.state.value
      : this.displayFormat(this.props.value);
    return (
      <input
        type="text" size={20} name={this.props.name} className={className} value={value}
        placeholder={this.state.focused ? 'yyyy-mm-dd' : null}
        onFocus={this.onFocus} onBlur={this.onBlur} onChange={this.onChange}
      />
    );
  }
}

DateInput.propTypes = {
  value: React.PropTypes.object,
  onChange: React.PropTypes.func.isRequired,
  onValidityChange: React.PropTypes.func,
  name: React.PropTypes.string.isRequired,
};
