import axios from 'axios';

const api = axios.create({
  baseURL: `https://ebytr-task.herokuapp.com ||${process.env.REACT_APP_API_PORT}`,
});

const requestNewCall = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export default { requestNewCall };
