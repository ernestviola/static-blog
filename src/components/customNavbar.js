import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import resume from '../images/Resume.pdf';
import './customNavbar.css';

export default class CustomNavbar extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/" className="Brand" style={{ color: "white" }}>Ernest.</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={0} componentClass={Link} href="/" to="/">
                            Home
                        </NavItem>
                        <NavItem eventKey={1} componentClass={Link} href="/projects" to="projects">
                            Projects
                        </NavItem>
                        <NavItem eventKey={2} href={resume} target="blank_">
                            Resume
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
