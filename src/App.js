import React, { Component } from 'react';
import CustomNavbar from './components/customNavbar';
import Routes from './Routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomNavbar />
        <Routes />
        <header className="App-header">
        </header>

      </div>
    );
  }
}

export default App;
