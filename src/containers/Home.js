import React, { Component } from 'react'
import { Button, Col, Row, Grid } from 'react-bootstrap';
import './Home.css';
import Graduation from '../images/homeCarousel/Graduations-24.jpg';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.images = {
            1: 'src/images/homeCarousel/50307388_00801_0589_Large.jpg',
            2: 'src/images/homeCarousel/DSC03556.JPG',
            3: 'src/images/homeCarousel/DSC03573.JPG',
            4: 'src/images/homeCarousel/DSC03582.JPG',
            5: 'src/images/homeCarousel/DSC03665.JPG',
            6: 'src/images/homeCarousel/DSC03709.JPG',
            7: 'src/images/homeCarousel/DSC03720.JPG',
            8: 'src/images/homeCarousel/DSC03734.JPG',
            9: 'src/images/homeCarousel/DSC03736.JPG',
            10: 'src/images/homeCarousel/DSC03742.JPG',
            11: 'src/images/homeCarousel/DSC04315.JPG',
            12: 'src/images/homeCarousel/Graduations-24.jpg'
        }

        this.state = {
            currentImage: "",
            currentQuote: "",
            quotes: [
                "What is life but one grand adventure.",
                "Fill your life with adventures, not things. Have stories to tell not stuff to show.",
                "Life is either a daring adventure or nothing at all. - Helen Keller",
                "If it fails, admit it frankly and try another. But above all, try something. - Franklin D. Roosevelt",
                "I never think of the future, It comes soon enough. - Albert Einstein",
                "One who makes no mistakes makes nothing at all. - Giocomo Casanova",
                "Don't waste your time on jealousy. Sometimes you're ahead, sometimes you're behind. The race is long and, in the end, it's only with yourself. - Baz Luhrmann",
                "Do one thing everyday that scares you. - Eleanor Roosevelt",
                "In the end it's not the years in your life that count; it's the life in your years. - Abraham Lincoln"


            ]
        }
    }

    componentDidMount() {
        this.setState({ currentQuote: this.state.quotes[this.randomQuote()] })
    }

    randomQuote() {
        return Math.floor(Math.random() * Math.floor(this.state.quotes.length));
    }

    render() {
        return (
            <div className="Home">
                <div className="Quote">
                    <h2>{this.state.currentQuote}</h2>
                </div>

                <div className="Introduction">
                    <img src={Graduation}></img>
                    <h1>Hi, I'm Ernest</h1>
                    <span className="description">I'm an adventurer who's pationate about what the future holds. Currently I'm a volunteer who helps teach computer science to high school students. But I've always been a tinkerer and explorer at heart. I'm looking to propel my career into the world of software development and data sciences.</span>
                </div>

                <Row>
                    <Col sm={6} md={4}>
                        <div>
                            <h2>Contact Me</h2>
                            <p>For work inquiries or questions, send me an email</p> <a href="mailto:ernest.viol@gmail.com"><Button>Here!</Button></a>
                        </div>
                    </Col>
                </Row>

            </div>
        )
    }
}
