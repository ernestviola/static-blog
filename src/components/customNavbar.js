import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import resume from '../images/Resume.pdf';
import './CustomNavbar.css';

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
            <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
                <Navbar.Brand >
                    <Link to="/" href="">Ernest.</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav>

                        <Nav.Item >
                            <Link className="nav-link" to="/">Home.</Link>
                        </Nav.Item>
                        <Nav.Item >
                            <Link className="nav-link" to="/projects" href="/projects">Projects.</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="nav-link" to={resume} href={resume} target="blank_">Resume.</Link>
                        </Nav.Item>
                    </Nav>



                </Navbar.Collapse>
            </Navbar>



        )
    }
}
