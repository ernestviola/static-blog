import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap';
import "./Home.css";

export default class Home extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col className="Main-Content" xs={12} md={8}>
                        <h2>Welcome Home</h2>
                        <p>I am currently looking for a position as a software engineer. I enjoy problem solving and helping others. Some of my interests include machine learning and application design.</p>
                    </Col>
                    <Col md={1}></Col>
                    <Col className="Side-Content" xs={12} md={3}>
                        <Col className="Side-Inner-Content" xs={12} sm={6} md={12}>
                            <h3>Projects</h3>
                            <ul>
                                <li>Flys</li>
                                <li>Radio Listener</li>
                                <li>Personal Blog</li>
                                <li>Player's Known BattleShips Game</li>
                                <li>Fireman Catch</li>
                                <li>Bash shell project</li>
                            </ul>
                        </Col>
                        <Col sm={1}></Col>
                        <Col className="Side-Inner-Content" xs={12} sm={5} md={12}>
                            <h3>Tasks</h3>
                            <ul>
                                <li>Add an image and description to Home's Main Content</li>
                                <li>Write First Blog</li>
                                <li>Create a portfolio page with resume</li>
                                <li>Add a contact me</li>
                                <li>Add demos to all projects with links to github</li>
                                <li>Finish the Readme.md for all projects on github</li>
                            </ul>
                        </Col>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
