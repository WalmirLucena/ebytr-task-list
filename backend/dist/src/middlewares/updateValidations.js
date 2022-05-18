"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const updateSchema = joi_1.default.object().keys({
    content: joi_1.default.string().required(),
    status: joi_1.default.string().required().valid('A começar', 'Em desenvolvimento', 'Pendente', 'Finalizado'),
});
const updateValidations = async (req, res, next) => {
    const validation = updateSchema.validate(req.body);
    if (validation.error)
        return res.status(400).json({ message: validation.error.message });
    next();
};
exports.default = updateValidations;
