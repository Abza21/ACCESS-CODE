import axios from 'axios';

const API_URL = 'http://localhost:5000';

// Upload file API call
export const uploadFile = async (formData) => {
  const response = await axios.post(`${API_URL}/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

// Encrypt file API call
export const encryptFile = async (fileName) => {
  const response = await axios.post(`${API_URL}/encrypt`, { fileName });
  return response.data;
};

// Decrypt file API call
export const decryptFile = async (fileName, iv) => {
  const response = await axios.post(`${API_URL}/decrypt`, { fileName, iv });
  return response.data;
};
