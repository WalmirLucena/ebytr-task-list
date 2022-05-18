"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskSchema = void 0;
const zod_1 = require("zod");
const TaskSchema = zod_1.z.object({
    content: zod_1.z.string({
        required_error: 'content is required',
        invalid_type_error: 'content must be a string',
    }),
    publishedAt: zod_1.z.string({
        required_error: 'publishedAt is required',
        invalid_type_error: 'publishedAt must be a string',
    }),
    status: zod_1.z.string({
        required_error: 'status is required',
        invalid_type_error: 'status must be a string',
    }),
});
exports.TaskSchema = TaskSchema;
