import React, { useState } from 'react';
import { Box, Button, CircularProgress, Typography, FormControl, Select, MenuItem } from '@mui/material';

const Sidebar = () => {
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [privacy, setPrivacy] = useState('private');

    const handleUpload = () => {
        setUploading(true);
        // Simulate file upload progress
        let interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setUploading(false);
                    return 100;
                }
                return prev + 10;
            });
        }, 500);
    };

    return ( <
        Box sx = {
            { width: '250px', p: 2, borderRight: '1px solid #ccc' } } > { /* Upload Button */ } <
        Button variant = "contained"
        color = "primary"
        onClick = { handleUpload } >
        Upload File <
        /Button>

        { /* Circular Progress */ } {
            uploading && ( <
                Box sx = {
                    { mt: 2, display: 'flex', justifyContent: 'center' } } >
                <
                CircularProgress variant = "determinate"
                value = { progress }
                /> <
                /Box>
            )
        }

        { /* Actions */ } <
        Box sx = {
            { mt: 4 } } >
        <
        Typography variant = "h6" > Actions < /Typography>

        { /* Encrypt File Button */ } <
        Button variant = "outlined"
        sx = {
            { mt: 2 } } > Encrypt File < /Button>

        { /* Privacy Settings */ } <
        FormControl sx = {
            { mt: 2, minWidth: 120 } } >
        <
        Typography > Privacy Settings < /Typography> <
        Select value = { privacy }
        onChange = {
            (e) => setPrivacy(e.target.value) }
        displayEmpty >
        <
        MenuItem value = "private" > Private < /MenuItem> <
        MenuItem value = "public" > Public < /MenuItem> <
        /Select> <
        /FormControl>

        { /* Save Button */ } <
        Button variant = "contained"
        sx = {
            { mt: 2 } } > Save < /Button> <
        /Box> <
        /Box>
    );
};

export default Sidebar;