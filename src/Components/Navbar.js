import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import logo from '../assets/images/logo2.png'

const Navbar = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color='navbarcolor'>
                <Toolbar>

                    <Typography variant="img" component="div" sx={{ flexGrow: 1 }}>
                        <Link to='/'>
                            <img src={logo} alt="image not found" className='w-16 h-16  border-red-500' />
                        </Link>
                    </Typography>


                    <Typography variant="img" component="div" className='grow text-white text-3xl'>
                        FastWash
                    </Typography>

                    <Link to='/about'>
                        <button color="inherit" className='mr-4 border-2 p-2 rounded-md border-grey-400 text-white '>About Us</button>
                    </Link>



                    <Avatar sx={{ bgcolor: 'grey', cursor: 'pointer', "&:hover": { backgroundColor: "#AAA6AD" } }} aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >MS
                    </Avatar>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My Orders</MenuItem>
                        <MenuItem onClick={handleClose}>Wallet</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>

                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar