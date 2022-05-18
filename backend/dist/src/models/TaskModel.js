"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const TaskSchema = new mongoose_1.Schema({
    content: String,
    publishedAt: String,
    status: String,
});
class TaskModel {
    constructor(model = mongoose_1.default.model('tasks', TaskSchema)) {
        this.model = model;
    }
    async create(obj) {
        const result = await this.model.create({ ...obj });
        return result;
    }
    async read() {
        const result = await this.model.find();
        return result;
    }
    async readOne(id) {
        const result = await this.model.findOne({ _id: id });
        return result;
    }
    async update(id, obj) {
        const objUpdated = await this.model.findByIdAndUpdate({ _id: id }, obj);
        return objUpdated;
    }
    async delete(id) {
        const objRemoved = await this.model.findByIdAndDelete({ _id: id });
        console.log(objRemoved);
        return objRemoved;
    }
}
exports.default = TaskModel;
