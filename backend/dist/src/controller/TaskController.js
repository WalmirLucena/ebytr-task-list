"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TaskService_1 = __importDefault(require("../services/TaskService"));
var ControllerErrors;
(function (ControllerErrors) {
    ControllerErrors["internal"] = "Internal Server Error";
    ControllerErrors["notFound"] = "Object not found";
    ControllerErrors["requiredId"] = "Id is required";
    ControllerErrors["badRequest"] = "Bad request";
})(ControllerErrors || (ControllerErrors = {}));
class TaskController {
    constructor(service = new TaskService_1.default()) {
        this.service = service;
        this.errors = ControllerErrors;
        this.read = async (req, res) => {
            try {
                const tasks = await this.service.read();
                return res.status(200).json(tasks);
            }
            catch (err) {
                return res.status(500).json({ error: this.errors.internal });
            }
        };
        this.create = async (req, res) => {
            const { body } = req;
            try {
                const task = await this.service.create(body);
                if (!task) {
                    return res.status(500).json({ error: this.errors.internal });
                }
                if ('error' in task) {
                    return res.status(400).json(task);
                }
                return res.status(201).json(task);
            }
            catch (err) {
                return res.status(500).json({ error: this.errors.internal });
            }
        };
        this.readOne = async (req, res) => {
            const { id } = req.params;
            try {
                const task = await this.service.readOne(id);
                return task
                    ? res.status(200).json(task)
                    : res.status(404).json({ error: this.errors.notFound });
            }
            catch (error) {
                return res.status(500).json({ error: this.errors.internal });
            }
        };
        this.update = async (req, res) => {
            try {
                const { id } = req.params;
                const task = await this.service.update(id, req.body);
                if (!task) {
                    return res.status(404)
                        .json({ error: this.errors.notFound });
                }
                return res.status(200).json(task);
            }
            catch (err) {
                return res.status(500)
                    .json({ error: this.errors.internal });
            }
        };
        this.delete = async (req, res) => {
            const { id } = req.params;
            try {
                const task = await this.service.delete(id);
                if (task)
                    return res.status(200).json(task);
                return res.status(404).json({ error: this.errors.notFound });
            }
            catch (error) {
                return res.status(500).json({ error: this.errors.internal });
            }
        };
    }
}
exports.default = TaskController;
