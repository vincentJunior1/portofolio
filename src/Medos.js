import React, {Component} from 'react';
import Medsos from './data/Medsos';

class MEDSOS extends Component{
    render(){
        const {link,image} = this.props.medsos;
        return(
            <span style = {{margin: 10}}>
                <a href ={link}>
                <img src={image} alt='social-profile' style = {{width:35, height:35}} />
                </a>
            </span>
        )
    }
}


class Medos extends Component{
    render(){
        return(
            <div>
                <h3>Connect With Me!</h3>
                {
                    Medsos.map(MEDSOSS => {
                        return(
                            <MEDSOS key = {MEDSOSS.id} medsos = {MEDSOSS} />
                        )
                    })
                }
            </div>
        )
    }
}

export default Medos;