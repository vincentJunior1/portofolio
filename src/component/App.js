import React, { Component } from 'react';;
import Medos from './Medos';
import profile from '../assets/foto.jpg';
import Title from './Title';
import Fade from 'react-reveal/Fade';
import Sidebar from './sidebar';



class App extends Component {
    state = { displayBio: false };

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio })
    }


    render() {
        return (
            <div className="allProfile">
                <Sidebar />
                <div className="profile1 jumbotron">
                    <img src={profile} alt='profile' className="profile" />
                    <h1 className="display-4"> Hello, I Am Vincent </h1>
                    <p className="lead"><Title /></p>
                    <hr />
                    <Fade top>
                    <Medos />
                    </Fade>
                    {this.state.displayBio ? (
                        <div>
                            <Fade top>

                                <p>I live in Bekasi Harapan Indah
                                <br />My hobby is code and learn something new
                                <br/>I use Javascript,python and php for my language programming
                                <br />I looking for new job Software Engineer for now</p>
                            </Fade>
                            <button type="button" className="btn" onClick={this.toggleDisplayBio}>Show Less</button>
                        </div>
                    ) : (
                            <div>
                                <button type="btn" className="btn" onClick={this.toggleDisplayBio} >Read More</button>
                            </div>
                        )}
                </div>
            </div>
        )
    }
}


export default App;