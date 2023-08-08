import React, { useState } from "react";
import NavigationTopBar from "../navigation-topbar";


function RegisterScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Your server-side registration logic here
        // Make sure to include validation, such as checking that passwords match
    };
    return (
        <div>
            <NavigationTopBar />
            <div className="container d-flex justify-content-center align-items-center mb-3 pt-5">
                <div className="row justify-content-center">
                    <div>
                        <div className="card mt-5" style={{ width: "24rem" }}>
                            <img
                                className="card-img-top"
                                src={require('../../images/register_sample.jpeg')}// image path
                                alt="register image cap"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Register</h5>
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
                                    <div className="mb-3">
                                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="confirmPassword"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Register</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RegisterScreen;