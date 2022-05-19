import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div className="m-5 flex flex-col justify-center">
        <h1 className="text-3xl font-bold flex justify-center mt-4">
          Ebytr To-do List
        </h1>
        <form className="m-5 flex flex-col justify-center">
          <div className="flex justify-center mb-3">
            <label className="w-9/12" htmlFor="content">
              <span className="after:ml-0.5 after:text-red-500 block text-sm font-bold text-slate-700">
                Insira sua Tarefa
              </span>
              <input
                type="content"
                name="content"
                className="mt-1 px-3 py-2 block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
          </div>
          <div className="flex justify-center mb-3">
            <label className="w-9/12" htmlFor="status">
              <span className="after:ml-0.5 after:text-red-500 block text-sm font-bold text-slate-700">
                Status da Tarefa
              </span>
              <select className="mt-1 px-3 py-2 block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option>Status da Tarefa</option>
                <option value="A começar">A começar</option>
                <option value="Em andamento">Em andamento</option>
                <option value="Pendente">Pendente</option>
                <option value="Finalizado">Finalizado</option>
              </select>
            </label>
          </div>
          <div className="flex justify-center mb-3">
            <button
              type="button"
              className="w-9/12 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Home;
