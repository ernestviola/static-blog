import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import './CustomFooter.css';
import resume from '../images/Resume.pdf';
import ContactForm from './ContactForm';
export default class CustomFooter extends Component {
    constructor(props) {
        super(props);

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
                "In the end it's not the years in your life that count; it's the life in your years. - Abraham Lincoln",
                "Great things are not done by impulse but by small things brought together. - Vincent van Gogh"


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
            <div className="Footer">

                <ContactForm />
                <Container>
                    <Row>
                        <Col sm={6} md={6}>
                            <ul>
                                <li>
                                    <h3>Social Media</h3>
                                </li>
                                <li>
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/ernestviola">Github</a>
                                </li>

                                <li>
                                    <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/ernestviola"> LinkedIn</a>
                                </li>
                            </ul>

                        </Col>
                        <Col sm={6} md={6}>
                            <ul>
                                <li>
                                    <h3>More Links</h3>
                                </li>
                                <li>
                                    <Link href="/projects" to="projects">Projects </Link>

                                </li>
                                <li>
                                    <a target="blank_" href={resume}>Resume </a>
                                </li>
                            </ul>

                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <div className="copyright">
                            {(new Date().getFullYear())} © <Link href="/" to="/">Ernest Viola</Link>
                        </div>


                    </Row>
                    <Row>
                        <div className="Quote container">
                            <p>{this.state.currentQuote}</p>
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }
}
