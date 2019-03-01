import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import './CustomFooter.css';
import resume from '../images/Resume.pdf';
import ContactForm from './ContactForm';
export default class CustomFooter extends Component {
    render() {
        return (
            <div className="Footer">
                <ContactForm />
                <Container>
                    <Row>
                        <Col sm={6} md={6}>
                            <ul>
                                <li>
                                    <h3>Social Media</h3>
                                </li>
                                <li>
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/ernestviola">Github</a>
                                </li>

                                <li>
                                    <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/ernestviola"> LinkedIn</a>
                                </li>
                            </ul>

                        </Col>
                        <Col sm={6} md={6}>
                            <ul>
                                <li>
                                    <h3>More Links</h3>
                                </li>
                                <li>
                                    <Link href="/projects" to="projects">Projects </Link>

                                </li>
                                <li>
                                    <a target="blank_" href={resume}>Resume </a>
                                </li>
                            </ul>

                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <div>
                            {(new Date().getFullYear())} © <Link href="/" to="/">Ernest Viola</Link>
                        </div>


                    </Row>
                </Container>
            </div>
        )
    }
}
