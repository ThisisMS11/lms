import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import image from '../assets/images/HomePage2.png'


const MidContainer = () => {

    return (
        <>
            <CssBaseline />


                <Container maxWidth="xl" className={`border-2 border-red-500`} >
                    <Typography variant='h2' className='p-4 border-2 w-fit border-red-400' component='section'>
                        FastWash
                    </Typography>
                    <Typography variant='h5' className='p-2 border-2 border-red-400 w-2/4 m-4'>
                        A Feature-Rich Laundry Software for Dry Cleaners And Laundries To Manage All Day-to-Day Operations
                    </Typography>

                    {/* <img src="../assets/HomePage2.png" alt="Image not found" /> */}
                    <Box className='h-[30rem]' />

                </Container>
        </>
    )
}

export default MidContainer