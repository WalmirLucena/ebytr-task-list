"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("../interfaces");
const TaskModel_1 = __importDefault(require("../models/TaskModel"));
class TasKService {
    constructor(model = new TaskModel_1.default()) {
        this.model = model;
    }
    async read() {
        const items = await this.model.read();
        return items;
    }
    async create(obj) {
        const parsed = interfaces_1.TaskSchema.safeParse(obj);
        if (!parsed.success) {
            return { error: parsed.error };
        }
        const item = await this.model.create(obj);
        return item;
    }
    async readOne(id) {
        const item = await this.model.readOne(id);
        return item;
    }
    async update(id, obj) {
        const item = await this.model.update(id, obj);
        return item;
    }
    async delete(id) {
        const item = await this.model.delete(id);
        return item;
    }
}
exports.default = TasKService;
