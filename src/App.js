import React, { Component } from 'react';
import Header from './Components/Header'
import About from './Components/About'
import Contact from './Components/Contact'
import Testimonial from './Components/Testimonial'
import Portfolio from './Components/Portfolio'
import Resume from './Components/Resume'
import Footer from './Components/Footer'
import Jumbotrum from './Components/Jumbotrum'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Resume />
        <Portfolio />
        <Testimonial />
        <Contact />
        <Footer />

      </div>
    );
  }
}

export default App;
