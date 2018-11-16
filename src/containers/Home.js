import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap';
import "./Home.css";

export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={4} className="card">
                            <div >
                                <h3>Effort</h3>
                            </div>
                        </Col>
                        <Col xs={12} md={4} className="card">
                            <div >
                                <h3>Education</h3>
                            </div>

                        </Col>
                        <Col xs={12} md={4} className="card">
                            <div >
                                <h3>Excellence</h3>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
