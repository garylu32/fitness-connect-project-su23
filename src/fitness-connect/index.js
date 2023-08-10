import React from "react";
import { Routes, Route } from "react-router";
import { Box } from "@mui/material";
import HomeScreen from "../pages/HomeScreen";
import LoginSreen from "./user/LoginScreen";
import RegisterScreen from "./user/RegisterScreen";
import Footer from "./components/Footer";
import ExerciseScreen from "../pages/ExerciseDetail";


function FitnessConnect() {
    return (
        <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
            <div className="container">
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/login/" element={<LoginSreen />} />
                    <Route path="/register/" element={<RegisterScreen />} />
                    <Route path="/exercise/:id" element={<ExerciseScreen />} />
                </Routes>
                <Footer />
            </div>

        </Box>
    );
}

export default FitnessConnect;