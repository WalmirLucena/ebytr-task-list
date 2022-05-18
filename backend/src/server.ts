import App from './app';
import MainRouter from './router/Router';
import TaskController from './controller/TaskController';
import 'dotenv/config';

const server = new App();

const taskRoute = new MainRouter();
const task = new TaskController();

taskRoute.addRoute(task);
server.addRouter(taskRoute.router);

server.startServer(process.env.PORT);

export default server;
