import React, { Component } from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

export default class CustomNavbar extends Component {
    render() {
        return (
            <Navbar staticTop collapseOnSelect fixedTop="True">
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/" className="Brand">Ernest.</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav bsStyle="pills">
                        <NavItem eventKey={1} componentClass={Link} href="/blog" to="/blog">
                            Blog
                        </NavItem>
                        <NavItem eventKey={2} componentClass={Link} href="/portfolio" to="/portfolio">
                            Portfolio
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        )
    }
}
