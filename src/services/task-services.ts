import { createId } from '@paralleldrive/cuid2';
import type {
  CreateTaskProps,
  UpdateTaskProps
} from '../interfaces/task-services.js';
import { TaskModel } from '../models/index.js';

class TaskService {
  async createTask({ title, description, images }: CreateTaskProps) {
    const newTask = await TaskModel.create({
      id: createId(),
      title,
      description,
      images
    });

    return {
      newTask
    };
  }

  async getALLTAsks() {
    const tasks = await TaskModel.find();

    return {
      tasks
    };
  }

  async updateTask({ id, title, description, images }: UpdateTaskProps) {
    const updateTask = await TaskModel.findOneAndUpdate(
      { id },
      { title, description, images },
      { new: true }
    );

    return {
      updateTask
    };
  }
}

export default new TaskService();
