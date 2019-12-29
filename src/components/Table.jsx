import React, { Component } from 'react';

class Table extends Component {
  render() {
    const headerCells = this.props.columns.map((col) => {
      return <th key={col.name}>{col.name}</th>;
    }); 

    const bodyRows = this.props.rows.map((row) => {
      const cells = this.props.columns.map((col) => {
        return <td>{this.props.format(col.property, row[col.property])}</td>
      });
      return (
        <tr>{cells}</tr>
      ); 
    });

    return(
      <table className={this.props.className}>
        <thead>
          {headerCells}
        </thead>
        <tbody> 
          {bodyRows}
        </tbody>
      </table>
    );
  }
}

export default Table;
