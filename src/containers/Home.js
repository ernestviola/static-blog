import React, { Component } from 'react'
// import './Home.css';


export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentQuote: "",
            quotes: [
                "I'm working on my posture."
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
            <div className="Home container">
                <h1>Hi, I'm Ernest & <span>{this.state.currentQuote}</span></h1>
                <h4>READ</h4>
                <ul>
                    <li>Article 1</li>
                    <li>Article 2</li>
                </ul>
                <h4>PROJECTS</h4>
                <ul>
                    <li>Project 1</li>
                    <li>Project 2</li>
                </ul>
            </div>

        )
    }
}
