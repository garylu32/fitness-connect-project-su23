import React, { useState } from "react";
import { Box } from "@mui/material";
import NavigationTopBar from "../fitness-connect/components/TopNavBar";
import HeroBanner from "../fitness-connect/components/HeroBanner";
import SearchExercises from "../fitness-connect/components/SearchExercises";
import Exercises from "../fitness-connect/components/Exercises";


const HomeScreen = () => {
    return (
        <Box>
            <NavigationTopBar />

            <HeroBanner />

            <SearchExercises />
            <Exercises />

        </Box>
    );
};

export default HomeScreen;