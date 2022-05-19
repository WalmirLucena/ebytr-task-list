import mongoose, { Document, Schema } from 'mongoose';
import { Task, update } from '../interfaces';

interface TaskDocument extends Task, Document {}

const TaskSchema = new Schema<TaskDocument>({
  content: String,
  publishedAt: String,
  status: String,
});

class TaskModel {
  constructor(public model = mongoose.model('tasks', TaskSchema)) {}

  async create(obj: Task): Promise<Task> {
    const result = await this.model.create({ ...obj });
    return result;
  }

  async read(): Promise<Task[]> {
    const result = await this.model.find();
    return result;
  }

  async readOne(id: string): Promise<Task | null> {
    const result = await this.model.findOne({ _id: id });
    return result;
  }

  async update(id:string, obj: update): Promise<Task | null> {
    const objUpdated = await this.model.findByIdAndUpdate({ _id: id }, obj);
    return objUpdated;
  }

  async delete(id: string): Promise<Task | null> {
    const objRemoved = await this.model.findByIdAndDelete({ _id: id });
    return objRemoved;
  }
}

export default TaskModel;
