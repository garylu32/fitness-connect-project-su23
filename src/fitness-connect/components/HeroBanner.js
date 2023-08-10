import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

const HeroBanner = () => {
    return (
        <Box sx={{
            mt: { md: '212px', xs: '70px' },
            ml: { md: '50px' }
        }} position="relative" p="20px">
            <Typography color="primary" fontWeight="650" fontSize="26px">
                WELCOME TO FITNESS CONNECT
            </Typography>
            <Typography fontWeight="700" sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
                Unleash Your Potential <br /> Join Us Today!
            </Typography>
            <Typography fontSize="22px" lineHeight="35px">
                Checkout the most effective exercies and start your workout
            </Typography>
            <Stack>
                <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#ff6600', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
            </Stack>
        </Box>
    )
}

export default HeroBanner