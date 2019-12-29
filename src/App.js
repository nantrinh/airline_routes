import React, { Component } from 'react';
import './App.css';
import DATA from './data';
import Table from './components/Table';

function RoutesTable({routes}) {
  return(
    <table>
      {
        routes.map((route) => (
          <tr>
            <td>{DATA.getAirlineById(route.airline).name}</td>
            <td>{DATA.getAirportByCode(route.src).name}</td>
            <td>{DATA.getAirportByCode(route.dest).name}</td>
          </tr>
        ))
      }
    </table>
  );
} 


class App extends Component {

  formatValue(property, value) {
    if (property === 'airline') {
      return DATA.getAirlineById(value).name;
    } else if (property === 'src' || property == 'dest') {
      return DATA.getAirportByCode(value).name;
    }
  }

  render() {
    const columns = [
      {name: 'Airline', property: 'airline'},
      {name: 'Source Airport', property: 'src'},
      {name: 'Destination Airport', property: 'dest'},
    ];
    
    const routes = DATA.routes; 

    return (
      <div className="app">
        <header className="header">
          <h1 className="title">Airline Routes</h1>
        </header>
        <section>
          <Table className="routes-table" columns={columns} rows={routes} format={this.formatValue} />
        </section>
      </div>
    );
  }
}

export default App;
