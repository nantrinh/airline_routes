import React, { Component } from 'react';

class Select extends Component {
  static defaultProps = {
    options: {},
    titleKey: '',
    selected: 'all',
    allTitle: 'All',
    onSelect: (value) => null,
  }

  handleChange = (event) => {
    event.preventDefault(); 
    this.props.onSelect(event.target.value);
  }

  render() {
    const options = Object.values(this.props.options).map((o) => {
      const value = o[this.props.titleKey];
      return <option key={value} value={value}>{value}</option>;
    }); 

    return (
      <select value={this.props.selected} onChange={this.handleChange}>
        <option key="all" value="all">{this.props.allTitle}</option>
        {options}
      </select>
    ); 
  };
}

export default Select;
