import React, {Component} from 'react';

const TITLES = [
    'Software Engineer',
    'Game Enthusiast',
    'hardware enthusiast'
];


class Title extends Component{
    state = {titleIndex: 0};

    componentDidMount(){
        console.log('title componen has mounted');

        this.animateTitles();

    }

    componentWillUnmount(){
        console.log('title componen has unmoun');

        clearInterval(this.titleInterval);
    }


    animateTitles = () => {
        this.titleInterval =  setInterval (() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

            this.setState({titleIndex});
        },4000);

        console.log(this.titleInterval);
    }

    render(){
        const title = TITLES[this.state.titleIndex];

        return(
            <p>I Am {title} </p>
        )
    }


}


export default Title;