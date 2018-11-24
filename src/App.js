import React, { Component } from 'react';
import './App.css';
import { Grid } from 'react-bootstrap';
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
        <Grid>
          <hr />
          <CustomFooter />
        </Grid>
      </div>
    );
  }
}

export default App;
