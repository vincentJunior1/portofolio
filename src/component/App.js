import React, { Component } from 'react';
import Projects from './Projects';
import Medos from './Medos';
import profile from '../assets/foto.jpg';
import Title from './Title';
import Fade from 'react-reveal/Fade';


class App extends Component {
    state = { displayBio: false};

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio })
    }


    render() {
        return (
            <div className="allProfile">
                <div className="profile1">
                    <img src={profile} alt='profile' className="profile" />
                    <h1> Hello </h1>
                    <p>I'm vincent junior</p>
                     <Title />
                    <p>I looking for new job for Junior Fullstack Developer for now</p>
                    {this.state.displayBio ? (
                        <div>
                            <Fade top>

                                <p>I live in Bekasi Harapan Indah</p>
                                <p>My hobby is code and learn something new</p>
                                <p>I use Javascript,python and php for my language programming</p>
                                <p>This is example of my API</p>
                            </Fade>
                                <button type="button" class="btn btn-dark" onClick={this.toggleDisplayBio}>Show Less</button>
                        </div>
                    ) : (
                            <div>
                                <button type="btn" class="btn btn-dark" onClick={this.toggleDisplayBio} >Read More</button>
                            </div>
                        )}
                </div>
                <hr />
                <Fade top>
                    <Projects />
                </Fade>
                <hr />
                <Fade top>
                    <Medos />
                </Fade>
            </div>
        )
    }
}


export default App;