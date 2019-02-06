import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Col, Row, Button } from 'react-bootstrap';
import './customFooter.css';
import resume from '../images/Resume.pdf';
export default class CustomFooter extends Component {
    render() {
        return (
            <div className="Footer">
                <Grid>
                    <Row className="contact">
                        <Col sm={12} md={12}>
                            <div>
                                <h2>Contact Me</h2>
                                <p>For work inquiries or questions, send me an email</p> <a href="mailto:ernest.viol@gmail.com"><Button>Here!</Button></a>
                            </div>
                        </Col>
                    </Row>
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

                        {(new Date().getFullYear())} © <Link href="/" to="/">Ernest Viola</Link>

                    </Row>
                </Grid>
            </div>
        )
    }
}
