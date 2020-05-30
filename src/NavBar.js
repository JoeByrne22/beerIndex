import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class NavBar extends Component {
    render() {
        return(
        <nav>
            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/about">ABOUT</Link>
                </li>
                <li>
                    <Link to="/index">Beer Index</Link>
                </li>
            </ul>
        </nav>
        )  
    }
}

export default NavBar;