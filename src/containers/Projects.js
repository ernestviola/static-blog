import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProjectCards from '../components/ProjectCards';

export default class Projects extends Component {
    render() {
        return (
            <div className="Projects container">
                <ProjectCards />
            </div>
        )
    }
}
