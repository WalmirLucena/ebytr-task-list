import App from './app';
import MainRouter from './router/Router';
import TaskController from './controller/TaskController';

const server = new App();

const taskRoute = new MainRouter();
const task = new TaskController();

taskRoute.addRoute(task);
server.addRouter(taskRoute.router);

server.startServer();

export default server;
