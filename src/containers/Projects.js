import React, { Component } from 'react'

export default class Projects extends Component {
    render() {
        return (
            <div className="Projects">
                <h2>This is where all of my projects go.</h2>
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
                                <a href="https://github.com/ernestviola/static-blog" target="blank_" rel="noopener noreferrer">Website</a>
                            </h3>
                            <p>This website took me a bit of time to finally finish. This is my 3rd iteration of this site and definitley not the last. I'm continuously working on improving the styles and functionality of this site.

                            </p>
                            <p>
                                For my first iteration I had used cards and a Postgresql database in order to populate those cards. I used Heroku as my cloud service provider and Flask a python framework for my backend. This project included the ability to login and create new project entries directly on the website.
                            </p>
                            <p>
                                However because of all of the extra backend work I found that the website became slow and impracticle.
                            </p>

                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Games</h3>
                    <ul>
                        <li>
                            Fireman Catch
                        </li>
                    </ul>
                </div>

            </div>
        )
    }
}
