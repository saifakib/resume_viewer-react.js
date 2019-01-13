import React, { Component } from 'react';
import Header from './Components/Header'
import About from './Components/About'
import Contact from './Components/Contact'
import Testimonial from './Components/Testimonial'
import Portfolio from './Components/Portfolio'
import Resume from './Components/Resume'
import Footer from './Components/Footer'
import './App.css';

class App extends Component {
    constructor(props){
        super();
        this.state={
            foo : 'bar',
            resumeData : {}
        }
    }

    getResumeData(){
        fetch('http://localhost:3000/resumeData.json')
            .then((res) => res.json() )
            .then((data) => {
                this.setState({ resumeData : data})
            })
            .catch(err => console.log(err))
    }

    componentDidMount() {
        this.getResumeData()
    }

    render() {
        console.log(this.state.resumeData);
        return (
          <div className="App">
            <Header data = {this.state.resumeData.main}/>
            <About data = {this.state.resumeData.main}/>
            <Resume data = {this.state.resumeData.main}/>
            <Portfolio data = {this.state.resumeData.main}/>
            <Testimonial data = {this.state.resumeData.main}/>
            <Contact data = {this.state.resumeData.main}/>
            <Footer data = {this.state.resumeData.main}/>

          </div>
        );
      }
}

export default App;
