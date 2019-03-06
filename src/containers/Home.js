import React, { Component } from 'react'
import { Button, Col, Row, Container } from 'react-bootstrap';
import './Home.css';
import Graduation from '../images/homeCarousel/Graduations-24.jpg';


export default class Home extends Component {
    // constructor(props) {
    //     super(props);
    //     this.images = {
    //         1: 'src/images/homeCarousel/50307388_00801_0589_Large.jpg',
    //         2: 'src/images/homeCarousel/DSC03556.JPG',
    //         3: 'src/images/homeCarousel/DSC03573.JPG',
    //         4: 'src/images/homeCarousel/DSC03582.JPG',
    //         5: 'src/images/homeCarousel/DSC03665.JPG',
    //         6: 'src/images/homeCarousel/DSC03709.JPG',
    //         7: 'src/images/homeCarousel/DSC03720.JPG',
    //         8: 'src/images/homeCarousel/DSC03734.JPG',
    //         9: 'src/images/homeCarousel/DSC03736.JPG',
    //         10: 'src/images/homeCarousel/DSC03742.JPG',
    //         11: 'src/images/homeCarousel/DSC04315.JPG',
    //         12: 'src/images/homeCarousel/Graduations-24.jpg'
    //     }
    // }

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
