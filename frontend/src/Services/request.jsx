import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ebytr-task.herokuapp.com',
});

export const request = async (endpoint, body, method) => {
  try {
    const response = await api[method](endpoint, body);
    return response.data;
  } catch (error) {
    if (error) {
      return error;
    }
    return new Error();
  }
};

export default api;
