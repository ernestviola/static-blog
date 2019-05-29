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
            </div>

        )
    }
}
