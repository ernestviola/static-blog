import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './customFooter.css';
import resume from '../images/Resume.pdf';
export default class CustomFooter extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="FooterLinks">
                    <ul className="ExternalLinks">
                        <li>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/ernestviola">Github</a>
                        </li>

                        <li>
                            <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/ernestviola"> LinkedIn</a>
                        </li>
                    </ul>
                    <ul className="InternalLinks">
                        <li>
                            <a to="/projects">Projects </a>
                        </li>
                        <li>
                            <a target="blank_" href={resume}>Resume </a>
                        </li>
                        <li>
                            {(new Date().getFullYear())} © <a to="/">Ernest Viola</a>
                        </li>
                    </ul>







                </div>
            </div>
        )
    }
}
