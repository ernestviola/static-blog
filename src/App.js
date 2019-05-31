import React from 'react';
import Routes from './Routes'
import CustomNavbar from './components/CustomNavbar';
import CustomFooter from './components/CustomFooter';
import './App.css';

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Routes />
      {/* <CustomFooter /> */}
    </div>
  );
}

export default App;
