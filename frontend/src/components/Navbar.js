import React from 'react';
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">Tasks</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/create-task">Create</Link>
            </li>
        </ul>
        </div>
);
}

export default Navbar;
