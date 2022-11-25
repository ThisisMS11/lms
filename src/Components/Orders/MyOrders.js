import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UserContext from '../context/Users/UserContext';
import { useState, useContext, useEffect } from 'react';
import { Container } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const MyOrders = () => {

    return (
        <div>

            <Container maxwidth="md" sx={{ height: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>

                <div className='text-4xl mb-[65px] font-semibold'>Your Orders</div>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontSize: 25, textAlign: 'center' }}>OrderId</TableCell>
                                <TableCell sx={{ fontSize: 25, textAlign: 'center' }}>Clothtype</TableCell>
                                <TableCell align="right" sx={{ fontSize: 25, textAlign: 'center' }}>WashingType</TableCell>
                                <TableCell align="right" sx={{ fontSize: 25, textAlign: 'center' }}>Quantity</TableCell>
                                <TableCell align="right" sx={{ fontSize: 25, textAlign: 'center' }}>Order Date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" sx={{ fontSize: 20, textAlign: 'center' }}>
                                    Name
                                </TableCell>
                                <TableCell align="right" sx={{ fontSize: 20, textAlign: 'center' }}>hello</TableCell>
                            </TableRow>

                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" sx={{ fontSize: 20, textAlign: 'center' }}>
                                    Email
                                </TableCell>
                                <TableCell align="right" sx={{ fontSize: 20, textAlign: 'center' }}>hello</TableCell>
                            </TableRow>

                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" sx={{ fontSize: 20, textAlign: 'center' }}>
                                    Mobile Number
                                </TableCell>
                                <TableCell align="right" sx={{ fontSize: 20, textAlign: 'center' }}>hello</TableCell>
                            </TableRow>

                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" sx={{ fontSize: 20, textAlign: 'center' }}>
                                    Address
                                </TableCell>
                                <TableCell align="right" sx={{ fontSize: 20, textAlign: 'center' }}>hello</TableCell>
                            </TableRow>


                        </TableBody>
                    </Table>
                </TableContainer>

                <div className="my-8">
                    <Link to='/'>
                        <Button color="secondary" variant="contained">Back to Home</Button>
                    </Link>
                </div>



            </Container>
        </div>
    )
}

export default MyOrders