import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Projects extends Component {
    render() {
        return (
            <div className="Projects">
                <div>
                    <h3>Projects</h3>
                    <ul>
                        <li>
                            <h3>
                                <a href="https://github.com/ernestviola/RadioListening" target="blank_" rel="noopener noreferrer">Radio Listener</a>
                            </h3>
                            <p>
                                One of my favorite projects which used Google's Speech API, Twilio's API, Multithreading, and Python.
                                </p>
                            <p>
                                Afterwards I would analyze the text for keywords for keywords that would be used to win radio contests and notify the users to call into the radio station to claim their prize.
                                </p>
                            <p>
                                Moving Forward: <br />
                                Notifications to when the 3rd party radio station would stop working. <br />
                                Automatic restart for when a thread would get stuck analyzing. <br />
                                Moving the program to a cloud service rather than running on my home machine.
                            </p>
                        </li>
                        <li>
                            <h3>
                                <a href="https://github.com/ernestviola/static-blog" target="blank_" rel="noopener noreferrer">ernestviola.com</a>
                            </h3>
                            <p>This website took me a bit of time to finally finish. This is my 3rd iteration of this site and definitley not the last. I'm continuously working on improving the styles and functionality of this site.

                            </p>
                            <p>
                                For my first iteration I had used cards and a Postgresql database in order to populate those cards. I used Heroku as my cloud service provider and Flask a python framework for my backend. This project included the ability to login and create new project entries directly on the website.
                            </p>
                            <p>
                                However because of all of the extra backend work I found that the website became slow and impracticle.
                            </p>

                            <p>
                                For my second iteration I wanted to use AWS lambda instead in order to cut on high development costs. This proved to work but there were issues with how lambda would talk to the data.
                            </p>
                            <p>
                                An idea that came out of this however was to create a lambda function that would update a static version of the website and would update the S3 storage system when I would do a CRUD action on the database. I plan to revisit this idea but at this point I just wanted to get something out.
                            </p>
                            <p>
                                The current iteration which you are looking at uses only html and javascript (REACT) and is hosting on S3 so costs are little to none.
                            </p>

                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Games</h3>
                    <ul>
                        <li>
                            <h3>
                                <Link to="/games/firemancatch">
                                    Fireman Catch
                                </Link>
                            </h3>
                            <p>
                                A video game made in unity for a game development class at San Diego State University
                            </p>
                        </li>
                    </ul>
                </div>

            </div>
        )
    }
}
