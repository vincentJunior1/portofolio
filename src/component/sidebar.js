import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Sidebar extends Component {
    render() {
        return (
            <div>
                <input type="checkbox" id="navcheck" role="button" title="menu" />
                    <label for="navcheck" aria-hidden="true" title="menu">
                        <span class="burger">
                            <span class="bar">
                                <span class="visuallyhidden">Menu</span>
                            </span>
                        </span>
                    </label>
                    <nav id="menu">
                        <Link to="/">Home</Link>
                        <Link to="/project">My Project</Link>
                        <Link to="/aboutme">About Me</Link>
                    </nav>
            </div>
        )
    }
}

export default Sidebar;