// src/components/Dashboard.js
import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Paper,
} from '@mui/material';
import { uploadFile, encryptFile, decryptFile } from '../api'; // Import the API functions

const Dashboard = () => {
  const [uploadProgress, setUploadProgress] = useState(0); // State for upload progress
  const [files, setFiles] = useState([]); // State for file list
  const [file, setFile] = useState(null); // State for currently selected file

  // Handle file selection
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // Handle file upload
  const handleUpload = async () => {
    if (!file) return alert('Please select a file first.');

    const formData = new FormData();
    formData.append('file', file); // Add selected file to form data

    try {
      setUploadProgress(0); // Reset progress

      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 20;
        });
      }, 500);

      const response = await uploadFile(formData); // Upload the file using API

      const newFile = {
        id: files.length + 1,
        name: response.file.name, // Assuming the response has file details
        owner: 'You',
        modified: new Date().toLocaleString(),
        protected: false, // Initially not encrypted
        size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`, // Convert size to MB
        shared: 'No',
        iv: null, // Initialization Vector (IV) for encryption
      };

      setFiles([...files, newFile]); // Add the new file to the list
      setFile(null); // Clear the selected file
      setUploadProgress(100); // Set upload progress to 100%
    } catch (error) {
      console.error('File upload failed:', error);
      alert('File upload failed.');
    }
  };

  // Handle file encryption
  const handleEncrypt = async (file) => {
    try {
      const response = await encryptFile(file.name); // Call encrypt API with the file name
      const updatedFiles = files.map((f) =>
        f.id === file.id ? { ...f, protected: true, iv: response.iv } : f
      );
      setFiles(updatedFiles); // Update file status to show it's encrypted
    } catch (error) {
      console.error('File encryption failed:', error);
      alert('File encryption failed.');
    }
  };

  // Handle file decryption
  const handleDecrypt = async (file) => {
    try {
      await decryptFile(file.name, file.iv); // Call decrypt API with file name and IV
      const updatedFiles = files.map((f) =>
        f.id === file.id ? { ...f, protected: false } : f
      );
      setFiles(updatedFiles); // Update file status to show it's decrypted
    } catch (error) {
      console.error('File decryption failed:', error);
      alert('File decryption failed.');
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>Welcome to the Dashboard</Typography>

      {/* File Upload Section */}
      <Box sx={{
        display: 'flex',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        width: '500px',
        mb: 3
      }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Upload File</Typography>
          <input type="file" onChange={handleFileChange} />
          <Button
            variant="contained"
            color="primary"
            onClick={handleUpload}
            sx={{ mt: 2 }}
          >
            Upload
          </Button>

          {uploadProgress > 0 && (
            <>
              <LinearProgress
                variant="determinate"
                value={uploadProgress}
                sx={{ width: '100%', mt: 2 }}
              />
              <Typography>{uploadProgress}%</Typography>
            </>
          )}
        </Box>
      </Box>

      {/* File Table */}
      <Typography variant="h6" sx={{ mb: 2 }}>Data Display</Typography>
      <TableContainer component={Paper} sx={{ mb: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>File Name</TableCell>
              <TableCell>Owner</TableCell>
              <TableCell>Modified</TableCell>
              <TableCell>Protected</TableCell>
              <TableCell>Size</TableCell>
              <TableCell>Shared Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {files.map((file) => (
              <TableRow key={file.id}>
                <TableCell>{file.name}</TableCell>
                <TableCell>{file.owner}</TableCell>
                <TableCell>{file.modified}</TableCell>
                <TableCell>
                  <Checkbox checked={file.protected} />
                </TableCell>
                <TableCell>{file.size}</TableCell>
                <TableCell>{file.shared}</TableCell>
                <TableCell>
                  {!file.protected ? (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleEncrypt(file)}
                    >
                      Encrypt
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleDecrypt(file)}
                    >
                      Decrypt
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Dashboard;
