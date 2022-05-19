import axios from "axios";
import { ITask } from "../Interfaces/apiInterfaces";

const api = axios.create({
  baseURL: `https://ebytr-task.herokuapp.com ||${process.env.REACT_APP_API_PORT}`,
});

const requestNewCall = async (endpoint: string, body: ITask) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export default { requestNewCall };
