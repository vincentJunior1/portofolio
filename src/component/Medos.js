import React from 'react';
import Medsos from '../data/Medsos';

const MEDSOS = props => {

    const {link,image} = props.medsos;
    return(
        <span style = {{margin: 10}}>
            <a href ={link}>
            <img src={image} alt='social-profile' style = {{width:35, height:35}} />
            </a>
        </span>
    )
}


const Medos = () =>(
    <div>
        {
            Medsos.map(MEDSOSS => (
                    <MEDSOS key = {MEDSOSS.id} medsos = {MEDSOSS} />
                ))
        }
    </div>
)

export default Medos;