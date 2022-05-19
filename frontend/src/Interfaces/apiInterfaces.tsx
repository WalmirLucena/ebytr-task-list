interface ITask {
  content: string;
  publishedAt: string;
  status: string;
}

interface TaskUpdate {
  content: string;
  status: string;
}

export type { ITask, TaskUpdate };
