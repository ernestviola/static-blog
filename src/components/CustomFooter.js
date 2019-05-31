import React, { Component } from 'react';

class CustomFooter extends Component {
    render() {
        return (
            <div className="Footer container">
                <h2>Hi I'm a Footer</h2>
                <ul>
                    <li>Github</li>
                    <li>LinkedIn</li>
                    <li>Instagram</li>
                    <li>Mail</li>
                </ul>
            </div>
        );
    }
}

export default CustomFooter;