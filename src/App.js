import React from 'react';
import Routes from './Routes'
import CustomNavbar from './components/CustomNavbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Routes />
    </div>
  );
}

export default App;
