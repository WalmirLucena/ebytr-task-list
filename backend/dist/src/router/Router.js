"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const updateValidations_1 = __importDefault(require("../middlewares/updateValidations"));
class MainRouter {
    constructor() {
        this.router = (0, express_1.Router)();
    }
    addRoute(controller) {
        this.router.post('/task', controller.create);
        this.router.get('/task', controller.read);
        this.router.get('/task/:id', controller.readOne);
        this.router.put('/task/:id', updateValidations_1.default, controller.update);
        this.router.delete('/task/:id', controller.delete);
    }
}
exports.default = MainRouter;
