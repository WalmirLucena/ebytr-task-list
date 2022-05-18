import { z } from 'zod';

const TaskSchema = z.object({
  content: z.string({
    required_error: 'content is required',
    invalid_type_error: 'content must be a string',
  }),
  publishedAt: z.string({
    required_error: 'publishedAt is required',
    invalid_type_error: 'publishedAt must be a string',
  }),
  status: z.string({
    required_error: 'status is required',
    invalid_type_error: 'status must be a string',
  }),
});

type Task = z.infer<typeof TaskSchema>;

export { Task, TaskSchema };
