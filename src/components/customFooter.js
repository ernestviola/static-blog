import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './customFooter.css';
export default class CustomFooter extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="FooterExternalLinks">

                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/ernestviola">Github</a> <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/ernestviola">LinkedIn</a>
                    {(new Date().getFullYear())} © <a className="footerTitle" to="/">Ernest Viola</a>





                </div>
            </div>
        )
    }
}
