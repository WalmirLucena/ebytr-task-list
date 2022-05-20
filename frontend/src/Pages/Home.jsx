import React from 'react';
import Input from '../Components/Inputs';
import { request } from '../Services/request';

function Home() {
  const createTask = async (data) => {
    const endpoint = '/task';
    const body = { ...data, publishedAt: new Date() };
    console.log(body);
    const response = await request(endpoint, body, 'post');
    console.log(response);
  };

  const getValues = (data) => {
    createTask(data);
  };

  return (
    <>
      <h1 className="text-3xl font-bold flex justify-center mt-4">
        Ebytr To-do List
      </h1>
      <Input getValues={getValues} />
    </>
  );
}

export default Home;
