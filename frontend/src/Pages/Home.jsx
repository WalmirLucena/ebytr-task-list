import React from 'react';

function Home() {
  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1>
        Ebytr To-do List
      </h1>
      <Inputs submit={handleSubmit} />
    </>
  );
}

export default Home;
