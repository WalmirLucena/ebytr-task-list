import { Request, Response } from 'express';
import TaskService from '../services/TaskService';
import { Task } from '../interfaces';

export type ResponseError = {
  error: unknown;
};

export interface RequestWithBody<T> extends Request {
  body: T;
}

enum ControllerErrors {
  internal = 'Internal Server Error',
  notFound = 'Object not found',
  requiredId = 'Id is required',
  badRequest = 'Bad request',
}

class TaskController {
  protected errors = ControllerErrors;

  constructor(public service = new TaskService()) { }

  read = async (
    req: Request,
    res: Response<Task[] | ResponseError>,
  ): Promise<typeof res> => {
    try {
      const tasks = await this.service.read();
      return res.status(200).json(tasks);
    } catch (err) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  create = async (
    req: RequestWithBody<Task>,
    res: Response<Task | ResponseError>,
  ): Promise<typeof res> => {
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
    } catch (err) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  readOne = async (
    req: Request<{ id: string; }>,
    res: Response<Task | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    try {
      const task = await this.service.readOne(id);
      return task
        ? res.status(200).json(task)
        : res.status(404).json({ error: this.errors.notFound });
    } catch (error) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  update = async (
    req: Request<{ id: string }>,
    res: Response<Task | ResponseError>,
  ): Promise<typeof res> => {
    try {
      const { id } = req.params;

      const task = await this.service.update(id, req.body);
      if (!task) {
        return res.status(404)
          .json({ error: this.errors.notFound });
      }
      return res.status(200).json(task);
    } catch (err) {
      return res.status(500)
        .json({ error: this.errors.internal });
    }
  };

  delete = async (
    req: Request<{ id: string; }>,
    res: Response<Task | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    try {
      const task = await this.service.delete(id);

      if (task) return res.status(200).json(task);

      return res.status(404).json({ error: this.errors.notFound });
    } catch (error) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };
}

export default TaskController;
