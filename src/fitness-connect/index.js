import React from "react";
import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router";
import HomeScreen from "./home-screen";
import LoginSreen from "./user/login-screen";
import RegisterSreen from "./user/register-screen";


function FitnessConnect() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Navigate to="/fitness-connect/home" />} />
                    <Route path="/fitness-connect/home" element={<HomeScreen />} />
                    <Route path="/fitness-connect/login/" element={<LoginSreen />} />
                    <Route path="/fitness-connect/register/" element={<RegisterSreen />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default FitnessConnect;