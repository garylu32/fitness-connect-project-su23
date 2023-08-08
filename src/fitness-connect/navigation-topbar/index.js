
import { Link } from "react-router-dom"

function NavigationTopBar() {
    return (
        <nav className="nav nav-tabs mb-2">
            <Link className="nav-link" to="/fitness-connect/home">Home</Link>
            <Link className="nav-link" to="/fitness-connect/login">Login</Link>
            <Link className="nav-link" to="/fitness-connect/register">Register</Link>
        </nav>
    );
}

export default NavigationTopBar;