import { Link } from "react-router-dom"
import { Stack } from "@mui/material";

import Logo from '../../images/logo_sample.jpeg';

const NavigationTopBar = () => (
    <nav className="navbar navbar-light bg-light justify-content-between mb-2 fixed-top">
        <div className="navbar-brand ms-3">
            <a className="nav-link" href="/">FITNESS CONNECT</a>
        </div>

        {/* <Link className="nav-link" to="/fitness-connect/home">Home</Link> */}

        <div className="nav">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/exercise/:id">Exercises</Link>
            <Link className="nav-link" to="/login">Login</Link>
            <Link className="nav-link" to="/register">Register</Link>
        </div>
    </nav>
)

export default NavigationTopBar;



