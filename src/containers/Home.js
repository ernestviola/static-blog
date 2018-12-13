import React, { Component } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap';
import "./Home.css";
import AboutPicture from "../images/Graduations-24.jpg";

export default class Home extends Component {
    render() {
        return (
            <div>
                <header className="header">
                    <div className="overlay">
                        <div className="container">
                            <div className="description">
                                <h1>    Hello ,Welcome To My official Website
    <p>    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
                                    <button class="btn btn-outline-secondary btn-lg">See more</button>   </h1>
                            </div>
                        </div>
                    </div>

                </header>
                <div className="about">
                    <Grid>
                        <Row>
                            <Col lg={4} md={4} sm={12}>
                                <Image src={AboutPicture} responsive />
                                <span className="text-justify">Software Engineer</span>
                            </Col>
                            <Col lg={8} md={8} sm={12}>
                                <h3>Ernest Viola</h3>
                                <p>
                                    Hello my name is Ernest and I am a computer scientist with an emphasis on application development and machine learning.
                            </p>
                            </Col>
                        </Row>
                    </Grid>
                </div>
                <Grid>
                    <Row>
                        <Col className="Main-Content" xs={12} md={8}>
                            <h2>Welcome Home</h2>
                            <p>I am currently looking for a position as a software engineer. I enjoy problem solving and helping others. Some of my interests include machine learning and application design.</p>
                        </Col>
                        <Col className="Side-Content" xs={12} mdOffset={1} md={3}>
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
                            <Col className="Side-Inner-Content" xs={12} sm={6} md={12}>
                                <h3>Tasks</h3>
                                <ul>
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
            </div>
        )
    }
}
