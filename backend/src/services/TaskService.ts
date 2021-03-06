import { ZodError } from 'zod';
import { Task, TaskSchema, update } from '../interfaces';
import TaskModel from '../models/TaskModel';

export interface ServiceError {
    error: ZodError;
}

class TasKService {
  constructor(public model = new TaskModel()) {}

  public async read(): Promise<Task[]> {
    const items = await this.model.read();
    return items;
  }

  public async create(obj: Task): Promise<Task | null | ServiceError> {
    const parsed = TaskSchema.safeParse(obj);

    if (!parsed.success) {
      return { error: parsed.error };
    }

    const item = await this.model.create(obj);

    return item;
  }

  public async readOne(id: string): Promise<Task | null | ServiceError> {
    const item = await this.model.readOne(id);
    return item;
  }

  public async update(id: string, obj: update): Promise<Task | null> {
    const item = await this.model.update(id, obj);
    return item;
  }

  public async delete(id: string): Promise<Task | null | ServiceError> {
    const item = await this.model.delete(id);
    return item;
  }
}

export default TasKService;
