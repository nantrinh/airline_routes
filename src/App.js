import React, { Component } from 'react';
import './App.css';
import DATA from './data';
import Table from './components/Table';
import Select from './components/Select';

class App extends Component {
  formatValue(property, value) {
    if (property === 'airline') {
      return DATA.getAirlineById(value).name;
    } else if (property === 'src' || property === 'dest') {
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
    const filteredAirlines = DATA.airlines;

    return (
      <div className="app">
        <header className="header">
          <h1 className="title">Airline Routes</h1>
        </header>
        <section>
        Show routes on <Select options={filteredAirlines} valueKey="id" titleKey="name"
  allTitle="All Airlines" value="" onSelect="" />
        </section>
        <section>
          <Table className="routes-table" columns={columns} rows={routes} format={this.formatValue} />
        </section>
      </div>
    );
  }
}

export default App;
