import React, { useState } from "react";
import NavigationTopBar from "../components/TopNavBar";

function LoginSreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Here, you can call your server-end logic to authenticate the user
        // For example:
        // authenticateUser(email, password).then(response => { ... });

        console.log("Email:", email, "Password:", password);
    };
    return (
        <div>
            <NavigationTopBar />
            <div className="container d-flex justify-content-center align-items-center pt-5">
                <div className="row justify-content-center">
                    <div >
                        <div className="card mt-5" style={{ width: "24rem" }}>
                            <img
                                className="card-img-top"
                                src={require('../../images/login_sample.jpeg')}// image path
                                alt="login cap"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Login</h5>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email address</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginSreen;