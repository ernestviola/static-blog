import React, { Component } from 'react'
import { Button, Col, Row, Container } from 'react-bootstrap';
import Graduation from '../images/Graduations-24.jpg';
import './Home.css';


export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Home">


                <div className="Introduction">
                    <img alt="" src={Graduation}></img>
                    <div className="description">
                        <div className="descriptionText">
                            <h1>Hi, I'm Ernest</h1>
                            <span>I'm an adventurer who's passionate about what the future holds. Currently I'm a volunteer who helps teach computer science to high school students. But I've always been a tinkerer and explorer at heart. I'm looking to propel my career into the world of software development and data sciences.</span>
                        </div>

                    </div>
                </div>

            </div>

        )
    }
}
