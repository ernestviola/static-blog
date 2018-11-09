import React, { Component } from 'react';
import marked from 'marked';

export default class Blog extends Component {
    constructor(props) {

        super(props);

        this.state = {
            content: "# Hello World \n ## Let me in Bobby \n",
            title: ""
        };
    }

    getMarkdownText() {
        var rawMarkup = marked(this.state.content, { sanitize: true });

        return { __html: rawMarkup };
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    render() {
        return (
            <div className="Blog" dangerouslySetInnerHTML={this.getMarkdownText()} />
        );
    }
}
