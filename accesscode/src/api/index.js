// src/api/index.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // Adjust if needed

export const uploadFile = async (formData) => {
  const token = localStorage.getItem('token');
  const response = await axios.post(`${API_BASE_URL}/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': token,
    },
  });
  return response.data;
};

export const encryptFile = async (fileName) => {
  const token = localStorage.getItem('token');
  const response = await axios.post(
    `${API_BASE_URL}/encrypt`,
    { fileName },
    {
      headers: {
        'Authorization': token,
      },
    }
  );
  return response.data;
};

export const decryptFile = async (fileName, iv) => {
  const token = localStorage.getItem('token');
  const response = await axios.post(
    `${API_BASE_URL}/decrypt`,
    { fileName, iv },
    {
      headers: {
        'Authorization': token,
      },
    }
  );
  return response.data;
};
