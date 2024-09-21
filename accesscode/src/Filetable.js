import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const FileTable = () => {
    // Sample file data
    const files = [
        { name: 'file1.pdf', date: '20 Sept 2024', size: '5MB', privacy: 'Private' },
        { name: 'file2.docx', date: '18 Sept 2024', size: '2MB', privacy: 'Public' },
    ];

    return ( <
        TableContainer component = { Paper } >
        <
        Table >
        <
        TableHead >
        <
        TableRow >
        <
        TableCell > File Name < /TableCell> <
        TableCell > Upload Date < /TableCell> <
        TableCell > Size < /TableCell> <
        TableCell > Privacy < /TableCell> <
        /TableRow> <
        /TableHead> <
        TableBody > {
            files.map((file, index) => ( <
                TableRow key = { index } >
                <
                TableCell > { file.name } < /TableCell> <
                TableCell > { file.date } < /TableCell> <
                TableCell > { file.size } < /TableCell> <
                TableCell > { file.privacy } < /TableCell> <
                /TableRow>
            ))
        } <
        /TableBody> <
        /Table> <
        /TableContainer>
    );
};

export default FileTable;