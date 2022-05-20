import React, { useEffect, useState } from 'react';
import Input from '../Components/Inputs';
import { request } from '../Services/request';
import trashCan from '../Images/trash-can-regular.svg';
import edit from '../Images/edit-regular.svg';

function Home() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState(false);

  const createTask = async (data) => {
    const endpoint = '/task';
    const body = { ...data, publishedAt: new Date() };
    await request(endpoint, body, 'post');
    setNewTask(!newTask);
  };

  const getTask = async () => {
    const endpoint = '/task';
    const response = await request(endpoint, {}, 'get');
    setTask(response);
  };

  const getValues = (data) => {
    createTask(data);
  };

  useEffect(() => {
    getTask();
  }, [newTask]);

  return (
    <>
      <h1 className="text-3xl font-bold flex justify-center mt-4">
        Ebytr To-do List
      </h1>
      <Input getValues={getValues} />
      <div className="flex justify-center mb-3 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <th>Tarefa</th>
            <th>Data</th>
            <th>Status</th>
            <th>Deletar</th>
            <th>Editar</th>
          </thead>
          <tbody>
            {task.map(({ content, publishedAt, status }) => (
              <tr key={publishedAt}>
                <td>{content}</td>
                <td>{publishedAt}</td>
                <td>{status}</td>
                <th>
                  <div className="delete">
                    <img className="w-6" src={trashCan} alt="icon to remove call" />
                  </div>
                </th>
                <th>
                  <div className="edit">
                    <img className="w-6" src={edit} alt="icon to remove call" />
                  </div>

                </th>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </>
  );
}

export default Home;
