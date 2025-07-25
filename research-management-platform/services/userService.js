import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Your backend URL

export const createUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/users`, userData);
        return response.data;
    } catch (error) {
        console.error("Error creating user", error);
        throw error;
    }
};

export const getUsers = async () => {
    try {
        const response = await axios.get(`${API_URL}/users`);
        return response.data;
    } catch (error) {
        console.error("Error fetching users", error);
        throw error;
    }
};
