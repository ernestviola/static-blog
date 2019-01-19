import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import resume from '../images/Resume.pdf';
import './customNavbar.css';

export default class CustomNavbar extends Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            key: null
        };
    }


    handleSelect(key) {
        if (key === 2) return;
        this.setState({ key });
    }


    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/" onClick={this.handleSelect} className="Brand">Ernest.</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight={true} activeKey={this.state.key}
                        onSelect={this.handleSelect}>
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
