import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import './Home.css';
export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <h1>What is life but one grand adventure</h1>
                <h1>Fill your life with adventures, not things. Have stories to tell not stuff to show.</h1>
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
