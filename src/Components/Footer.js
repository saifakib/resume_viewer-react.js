import React, { Component } from 'react';


class Footer extends Component {
    render() {
        return (
            <div className="App">
                <footer>
                    <div className="row">
                        <div className='container'>
                            <div className="twelve columns">

                                <ul className="social-links">
                                    <li><a href="#"><i className="fa fa-facebook text-center"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                    <li><a href="#"><i className="fa fa-skype"></i></a></li>
                                </ul>

                                <ul className="copyright">
                                    <li>&copy; Copyright 2014 CeeVee</li>
                                    <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
                                </ul>

                            </div>

                            <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>

                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;
