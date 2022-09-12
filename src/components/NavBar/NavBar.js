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
                    <NavLink to ="/movielist"><li>Movie List</li></NavLink>
                    <NavLink to ="/reviews"><li>Reviews</li></NavLink>
                    <NavLink to ="/contacts"><li>Contacts</li></NavLink>
                    <NavLink to ="/rentmovie"><li>Rent Movie</li></NavLink>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar;