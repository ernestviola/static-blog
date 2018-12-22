import React, { Component } from 'react';
import './customFooter.css';
export default class CustomFooter extends Component {
    render() {
        return (
            <div className="Footer">
                <hr />
                <div className="container">
                    <div className="ForterExternalLinks">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/ernestviola">Github</a> <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/ernestviola">LinkedIn</a>
                    </div>
                    <div>
                        2018-{(new Date().getFullYear())} © Ernest Viola
                    </div>



                </div>
            </div>
        )
    }
}
