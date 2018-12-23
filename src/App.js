import React, { Component } from 'react';
import CustomNavbar from './components/customNavbar';
import CustomFooter from './components/customFooter';
import Routes from './Routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomNavbar />
        <div className="container">
          <Routes />
        </div>



        <CustomFooter />
      </div>
    );
  }
}

export default App;
