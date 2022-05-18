"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const Router_1 = __importDefault(require("./router/Router"));
const TaskController_1 = __importDefault(require("./controller/TaskController"));
require("dotenv/config");
const server = new app_1.default();
const taskRoute = new Router_1.default();
const task = new TaskController_1.default();
taskRoute.addRoute(task);
server.addRouter(taskRoute.router);
server.startServer(process.env.PORT);
exports.default = server;
