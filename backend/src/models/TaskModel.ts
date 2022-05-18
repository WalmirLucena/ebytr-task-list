import mongoose, { Document, Schema } from 'mongoose';
import { Task } from '../interfaces';

interface TaskDocument extends Task, Document {}

const TaskSchema = new Schema<TaskDocument>({
  content: String,
  publishedAt: String,
  status: String,
});

class TaskModel {

}
