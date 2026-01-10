import { TaskRepository } from '@/domain/task/task'

export class TaskService {
  constructor(private readonly repository: TaskRepository) {}

  getTasks() {
    return this.repository.getTasks()
  }
}
