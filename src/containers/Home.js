import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap';
import "./Home.css";

export default class Home extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col className="Main" xs={12} md={8}>
                        MAIN
                    </Col>
                    <Col className="Side" xs={12} md={4}>
                        <Col xs={12} sm={6} md={12}>
                            Side 1
                        </Col>
                        <Col xs={12} sm={6} md={12}>
                            Side 2
                        </Col>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
