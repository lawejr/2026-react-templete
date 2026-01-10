export type TaskStatus = 'todo' | 'in_progress' | 'done'

export interface Task {
  id: string
  title: string
  assignee: string
  status: TaskStatus
  dueDate: string
  tags?: string[]
}

export interface TaskRepository {
  getTasks(): Promise<Task[]>
}
