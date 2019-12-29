import React, { Component } from 'react';
import './App.css';
import DATA from './data';

function RoutesTable({routes}) {
  return(
    <table>
      {
        routes.map((route) => (
          <tr>
            <td>{route.airline}</td>
            <td>{route.src}</td>
            <td>{route.dest}</td>
          </tr>
        ))
      }
    </table>
  );
} 

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <h1 className="title">Airline Routes</h1>
        </header>
        <section>
          <RoutesTable routes={DATA.routes}/>
        </section>
      </div>
    );
  }
}

export default App;
