import React, { Component } from 'react'
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';

import './Blog.css';

export default class componentName extends Component {
    render() {
        return (
            <Grid className="Blog">
                <Row>
                    <Col xs={12} md={8} className="Main">
                        <h2>Welcome</h2>
                    </Col>
                    <Col xs={6} md={4} className="Sidebar">
                        <h4>Sidebar</h4>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
