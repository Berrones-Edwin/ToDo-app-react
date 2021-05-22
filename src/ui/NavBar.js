import { ButtonGroup } from "@chakra-ui/button";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            {/* <ul>
                <li>
                    <Link to="/">All</Link>
                </li>
                <li>
                    <Link to="/active">Active</Link>
                </li>
                <li>
                    <Link to="/completed">Completed</Link>
                </li>
            </ul> */}
            <ButtonGroup variant="outline" spacing="6">
                <Link to="/">All</Link>
                <Link to="/active">Active</Link>{" "}
                <Link to="/completed">Completed</Link>
            </ButtonGroup>
        </nav>
    );
};

export default NavBar;
