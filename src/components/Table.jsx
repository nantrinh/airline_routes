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

  previousPage = (event) => {
    event.preventDefault(); 
    this.setState({page: this.state.page - 1});
  }

  nextPage = (event) => {
    event.preventDefault(); 
    this.setState({page: this.state.page + 1});
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
          <button key="previous" disabled={this.state.page === 0} onClick={this.previousPage}>Previous Page</button>
          <button key="next" disabled={start + this.props.perPage >= this.props.rows.length} onClick={this.nextPage}>Next Page</button>
        </div>
      </div>
    );
  }
}

export default Table;
