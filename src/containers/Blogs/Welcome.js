import React, { Component } from 'react'
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';

import './Blog.css';

export default class Welcome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "Welcome",
            subtitle: "To my Blog",
            content: "Hello World. Let me in Bobby",
            date: "November 12, 2018",
            author: "Ernest Viola"
        };
    }

    render() {
        return (
            <Grid className="Blog">
                <Row>
                    <Col xs={12} md={10} className="Main">
                        <h1>{this.state.title}</h1>
                        <h3>{this.state.subtitle}</h3>
                        <p>{this.state.content}</p>
                    </Col>
                    <Col xs={6} md={2} className="Sidebar">
                        <h4>Sidebar</h4>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
