import React, { Component } from 'react';


class Footer extends Component {
    render() {
        if(this.props.data){
            var networks = this.props.data.social.map((network) => {
                return <li key={network.name}><a href={network.url}><i className={network.className}/></a></li>
            })
        }
        return (
            <div className="App">
                <footer>
                    <div className="row">
                        <div className='container'>
                            <div className="twelve columns">

                                <ul className="social-links">
                                    { networks }
                                </ul>

                                <ul className="copyright">
                                    <li>&copy; Copyright 2019 CeeVee</li>
                                    <li>Design by <a title="Styleshout" href="https://github.com/saifakib">akib</a></li>
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
