import React, { Component } from 'react';
import Sidebar from './sidebar';
import Foto from '../assets/foto.jpg'
import Fade from 'react-reveal/Fade'

const Aboutme = () => {
    return (
        <div>
            <Sidebar />
            <section>
                <div className="jumbotron about-me">
                    <div className="container">
                        <Fade right>
                            <div className="col-xs-12" >
                                <div className="col-xs-3">
                                    <img className="foto" src={Foto} alt="profile" />
                                </div>
                                <div className="col-xs-9 desc-aboutMe">
                                    <h2 className="aboutMe-header">ABOUT ME</h2>
                                        <p>Nama Saya Vincent Junior, Junior Software Engineer.
                                        <br />Saya lulusan SMK Ananda dengan jurusan Computer Network Engineering.
                                        <br />Belajar hal-hal baru adalah hobi saya.
                                        <br />rasa penasaran dan rasa ingin mencoba saya yg membuat saya tetap maju.</p>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Aboutme;