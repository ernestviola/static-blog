import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Ernest.</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Nav>
            <NavItem>
              <Link to="/blog">Blog</Link>
            </NavItem>
            <NavItem>
              <Link to="/portfolio">Portfolio</Link>
            </NavItem>
          </Nav>
        </Navbar>
        <Routes />
      </div>
    );
  }
}

export default App;
