import { Link } from "react-router-dom"

function NavigationTopBar() {
    return (
        <nav className="navbar navbar-light bg-light justify-content-between mt-2 mb-2">
            <div className="navbar-brand ms-3">
                <a className="nav-link" href="/fitness-connect/home">FITNESS CONNECT</a>
            </div>

            {/* <Link className="nav-link" to="/fitness-connect/home">Home</Link> */}

            <div className="nav">
                <Link className="nav-link" to="/fitness-connect/login">Login</Link>
                <Link className="nav-link" to="/fitness-connect/register">Register</Link>
            </div>
        </nav>


    );
}

export default NavigationTopBar;



