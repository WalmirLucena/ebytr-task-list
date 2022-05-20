import React from 'react';
import Input from '../Components/Inputs';

function Home() {
  const getValues = (data) => {
    console.log(data);
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
