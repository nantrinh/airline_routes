import React, { Component } from 'react';

class Table extends Component {
  static defaultProps = {
    perPage: 25,
  }

  constructor(props) {
    super(props);
    this.state = {
      page: 0, 
    };
  }

  render() {
    const headerCells = this.props.columns.map((col) => {
      return <th key={col.name}>{col.name}</th>;
    }); 

    const start = this.state.page * this.props.perPage;

    const bodyRows = this.props.rows.slice(start, start + this.props.perPage).map((row) => {
      const cells = this.props.columns.map((col) => {
        return <td>{this.props.format(col.property, row[col.property])}</td>
      });
      return (
        <tr>{cells}</tr>
      ); 
    });

    return(
      <div>
        <table className={this.props.className}>
          <thead>
            {headerCells}
          </thead>
          <tbody> 
            {bodyRows}
          </tbody>
        </table>
        <div>
          <p>Showing {start} - {start + this.props.perPage} of {this.props.rows.length} total routes.</p>
        </div>
      </div>
    );
  }
}

export default Table;
