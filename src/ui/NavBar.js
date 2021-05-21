import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">All</Link>
                </li>
                <li>
                    <Link to="/active">Active</Link>
                </li>
                <li>
                    <Link to="/completed">Completed</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
