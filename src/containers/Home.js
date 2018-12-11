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
                    </Col>
                    <Col className="Side-Content" xs={12} md={4}>
                        <Col xs={12} sm={6} md={12}>
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
                        <Col xs={12} sm={6} md={12}>
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
