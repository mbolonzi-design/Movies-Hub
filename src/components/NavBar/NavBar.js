import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.css'

function NavBar(){
    return(
        <nav>
            <div>
                <h3>Movie Hub Inc</h3>
            </div>
            <div>
                <ul>
                    <NavLink to ="/"><li>Home</li></NavLink>
                    <NavLink to ="/movies"><li>Movies</li></NavLink>
                    <NavLink to ="/reviews"><li>Reviews</li></NavLink>
                    <NavLink to ="/contacts"><li>Contacts</li></NavLink>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar;