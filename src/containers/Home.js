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
                        </Col>
                        <Col xs={12} sm={6} md={12}>
                            <h3>Tasks</h3>
                        </Col>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
