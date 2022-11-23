import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Card, Typography } from '@mui/material';
import washingmachine from '../assets/images/washingmachine.png'
import Button from '@mui/material/Button';
import ServiceCard from './ServiceCard';
import ClientReview from './ClientReview';


const MidContainer = () => {

    return (
        <>
            <CssBaseline />


            <Container maxWidth="xl" className={`border-2 border-red-500 h-96 flex items-center justify-around`}
                sx={{ display: 'flex' }} >
                <div className='border-2 border-green-200 w-2/4'>
                    <Typography variant='h2' className='p-2 border-2 w-fit border-red-400' sx={{ fontWeight: '350' }} component='div'>
                        FastWash
                    </Typography>
                    <Typography variant='h4' className='p-2 border-2 w-fit border-red-400' component='div'>
                        Cleaning Clothes made easy with FashWash
                    </Typography>
                    <Typography variant='h5' className='p-2 border-2 border-red-400 w-3/4 '>
                        A Feature-Rich Laundry Software for Dry Cleaners And Laundries To Manage All Day-to-Day Operations
                    </Typography>
                    <Button variant="contained" color='trycolor' sx={{ color: 'white', marginTop: '4px', borderRadius: 6, paddingX: 4 }}>Try us</Button>

                </div>

                <div className="logoimage w-96 h-fit border-2 border-green-5">
                    <img src={washingmachine} alt="" />
                </div>

            </Container>

            {/* <div className='border-t-2 w-full border-black'></div> */}

            <Container maxWidth="xl" className='border-2 border-red-800'>
                <Typography variant='h3' className='p-2 border-2  w-fit border-red-400' sx={{ fontWeight: '350', margin: '0px auto' }} component='div'>
                    Our Services
                </Typography>

                <div className='flex items-center justify-around mt-10 border-2 border-red-400'>
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                </div>
            </Container>

            <Container maxWidth="xl" className='border-2 border-red-800 my-4'>
            <Typography variant='h3' className='p-2 border-2  w-fit border-red-400 mb-4' sx={{ fontWeight: '350', margin: '0px auto' }} component='div'>
                    Our Clients
                </Typography>
                <ClientReview />
            </Container>
        </>
    )
}

export default MidContainer