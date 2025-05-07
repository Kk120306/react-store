import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {

    return (
        <>
            <Link to="/"><h1>food.</h1></Link>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/store">Store</Link>
                </li>
            </ul>


        </>
    )
}

export default NavBar;