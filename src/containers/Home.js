import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import './Home.css';
import resume from '../images/Resume.pdf';
export default class componentName extends Component {
    render() {
        return (
            <div className="Home">
                I'm home...
                <div>
                    <h2>Introduction w/ Picture</h2>
                </div>
                <div>
                    <h2>Contact Me</h2>
                    <p>For work inquiries or questions, send me an email</p> <a href="mailto:ernest.viol@gmail.com"><Button>Here!</Button></a>
                </div>
            </div>
        )
    }
}
