import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

const Navbar = () => {
    return ( <
        AppBar position = "static" >
        <
        Toolbar sx = {
            { display: 'flex', justifyContent: 'space-between' } } > { /* Logo */ } <
        Typography variant = "h6"
        component = "div" >
        MyStorage <
        /Typography>

        { /* Centered Menu Buttons */ } <
        div style = {
            { display: 'flex', gap: '20px' } } >
        <
        Button color = "inherit" > My Files < /Button> <
        Button color = "inherit" > Privacy Settings < /Button> <
        Button color = "inherit" > NFT < /Button> <
        /div>

        { /* Profile and Logout */ } <
        div >
        <
        IconButton color = "inherit" >
        <
        AccountCircle / >
        <
        /IconButton> <
        Button color = "inherit" > Log Out < /Button> <
        /div> <
        /Toolbar> <
        /AppBar>
    );
};

export default Navbar;