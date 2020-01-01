import React, { Component } from 'react';

class Select extends Component {
  static defaultProps = {
    options: [],
    title: 'Please select',
    valueKey: '',
    titleKey: '',
    value: 'all',
    allTitle: 'All',
    onSelect: (value) => null,
    enabledKey: undefined,
  }

  handleChange = (event) => {
    event.preventDefault();
    this.props.onSelect(event.target.value);
  }

  render() {
    let optionNames = new Set();
    this.props.options.forEach((o) => optionNames.add(o[this.props.valueKey]));

    let options = this.props.all.map((option) => {
      const value = option[this.props.valueKey];
      if (optionNames.has(value)) { 
        return (
          <option key={value} value={value}>
            { option[this.props.titleKey] }
          </option>
        );
      } else {
        return (
          <option key={value} value={value} disabled>
            { option[this.props.titleKey] }
          </option>
        );
      }
    });
    options.unshift(<option key="all" value="all">{this.props.allTitle}</option>);

    return (
      <select value={this.props.value} onChange={this.handleChange}>
        { options }
      </select>
    );
  }
}

export default Select;
