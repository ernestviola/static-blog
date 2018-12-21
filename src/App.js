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
      </div>
    );
  }
}

export default App;
