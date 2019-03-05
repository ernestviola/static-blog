import React, { Component } from 'react'
import './ProjectCards.css';
import { Card, CardColumns } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class ProjectCards extends Component {
  render() {
    return (
      <div>
        <h3>Projects</h3>
        <CardColumns>
          <Card>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              <Card.Title><a href="https://github.com/ernestviola/RadioListening" target="blank_" rel="noopener noreferrer">Radio Listener</a></Card.Title>
              <Card.Text>
                One of my favorite projects which used Google's Speech API, Twilio's API, Multithreading, and Python.
      </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              <Card.Title><a href="https://github.com/ernestviola/static-blog" target="blank_" rel="noopener noreferrer">ernestviola.com</a></Card.Title>
              <Card.Text>
                This website took me a bit of time to finally finish. This is my 3rd iteration of this site and definitley not the last. I'm continuously working on improving the styles and functionality of this site.
      </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              <Card.Title><Link to="/games/firemancatch">
                Fireman Catch
                                </Link></Card.Title>
              <Card.Text>
                A video game made in unity for a game development class at San Diego State University
      </Card.Text>
            </Card.Body>
          </Card>
        </CardColumns>
      </div>
    )
  }
}
