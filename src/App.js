import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import CustomNavbar from './components/CustomNavbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomNavbar />
        <Routes />
      </div>
    );
  }
}

export default App;
