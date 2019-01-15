import React, { Component } from 'react';


class Resume extends Component {
    render() {
        if(this.props.data){
            var work = this.props.data.work.map((exp) => {
                return <li key={exp.orgrnization}>
                    <div className="row item">
                        <div className="twelve columns">
                            <h3>{exp.orgrnization}</h3>
                            <p className="info">{exp.position} <span>&bull;</span> <em className="date">{exp.time}</em></p>
                        </div>

                    </div>
                </li>
            })
        }
        return (
            <div className="App">
                <section id="resume">
                    <div className='container'>
                        <div className="row education">
                            <div className="three columns header-col">
                                <h1><span>Education</span></h1>
                            </div>
                            <div className="nine columns main-col">

                                <div className="row item">
                                    <div className="twelve columns">
                                        <h3>University of Life</h3>
                                        <p className="info">Bachelor of Computer Science & Engineering<span>&bull;</span> <em className="date">2019-</em></p>
                                        <p>Northern University Bangladesh</p>
                                    </div>
                                </div>

                                <div className="row item">
                                    <div className="twelve columns">
                                        <h3>Diploma of Life</h3>
                                        <p className="info">Diploma of Computer Science & Technology<span>&bull;</span> <em className="date">2018</em></p>
                                        <p>Feni Computer Institute</p>
                                    </div>
                                </div>

                                <div className="row item">
                                    <div className="twelve columns">
                                        <h3>School of Life</h3>
                                        <p className="info">Graduate from here <span>&bull;</span> <em className="date">2014</em></p>
                                        <p>Mirpur High School</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="row work">
                            <div className="three columns header-col">
                                <h1><span>Work</span></h1>
                            </div>
                            <div className="nine columns main-col">
                                { work }
                            </div>
                        </div>

                        <div className="row skill">
                            <div className="three columns header-col">
                                <h1><span>Skills</span></h1>
                            </div>

                            <div className="nine columns main-col">
                                <h4>Here i introduce some of my skills by percentage
                                </h4>
                                <div className="bars">
                                    <ul className="skills">
                                        <li><span className="bar-expand photoshop"></span><em>Django</em></li>
                                        <li><span className="bar-expand illustrator"></span><em>React.js</em></li>
                                        <li><span className="bar-expand wordpress"></span><em>Express.js</em></li>
                                        <li><span className="bar-expand css"></span><em>Node.js</em></li>
                                        <li><span className="bar-expand jquery"></span><em>Responsive Design</em></li>
                                        <li><span className="bar-expand html5"></span><em>Javasxript</em></li>
                                        <li><span className="bar-expand jquery"></span><em>HTTP</em></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Resume;
