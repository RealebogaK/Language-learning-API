import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const fetchFlashcards = async () => {
  const response = await axios.get(`${API_URL}/flashcards`);
  return response.data;
};

export const loginUser = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  return response.data;
};

export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const createFlashcard = async (flashcard) => {
  const response = await axios.post(`${API_URL}/flashcards`, flashcard);
  return response.data;
};
