import axios from 'axios';

const api = axios.create({
  baseURL: `https://ebytr-task.herokuapp.com ||${process.env.REACT_APP_API_PORT}`,
});

export const request = async (endpoint, body, method) => {
  try {
    const response = await api[method](endpoint, body);
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    return new Error();
  }
};

export default api;
