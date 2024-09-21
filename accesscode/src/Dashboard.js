import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import FileTable from './FileTable';
import { Box } from '@mui/material';

const Dashboard = () => {
    return ( <
        >
        <
        Navbar / >
        <
        Box sx = {
            { display: 'flex' } } > { /* Sidebar */ } <
        Sidebar / >

        { /* Main Content Area */ } <
        Box sx = {
            { flexGrow: 1, p: 2 } } >
        <
        FileTable / >
        <
        /Box> <
        /Box> <
        />
    );
};

export default Dashboard;