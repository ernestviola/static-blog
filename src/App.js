import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import CustomNavbar from './components/CustomNavbar';
import CustomFooter from './components/CustomFooter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomNavbar />
        <div className="Content">
          <Routes />
        </div>
        <hr />
        <CustomFooter />
      </div>
    );
  }
}

export default App;
