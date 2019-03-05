import React, { Component } from 'react';
import CustomNavbar from './components/CustomNavbar';
import CustomFooter from './components/CustomFooter';
import Routes from './Routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomNavbar />
        <div className="content">
          <Routes />
        </div>



        <CustomFooter />
      </div>
    );
  }
}

export default App;
