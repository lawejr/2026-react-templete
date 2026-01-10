import { Task, TaskRepository } from '@/domain/task/task'

const mockTasks: Task[] = [
  {
    id: 'task-1',
    title: 'Onboarding flow refresh',
    assignee: 'Alex Kim',
    status: 'in_progress',
    dueDate: '2024-06-10',
    tags: ['product', 'ux'],
  },
  {
    id: 'task-2',
    title: 'Analytics events audit',
    assignee: 'Rina Becker',
    status: 'todo',
    dueDate: '2024-06-15',
    tags: ['data'],
  },
  {
    id: 'task-3',
    title: 'Billing adapter rollout',
    assignee: 'Diego Marquez',
    status: 'in_progress',
    dueDate: '2024-06-05',
    tags: ['payments'],
  },
  {
    id: 'task-4',
    title: 'Docs for admin permissions',
    assignee: 'Priya Nair',
    status: 'done',
    dueDate: '2024-05-28',
    tags: ['docs'],
  },
  {
    id: 'task-5',
    title: 'SLA dashboard polish',
    assignee: 'Samir Patel',
    status: 'todo',
    dueDate: '2024-06-18',
    tags: ['observability'],
  },
]

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

class TaskHttpRepository implements TaskRepository {
  async getTasks(): Promise<Task[]> {
    await delay(400)
    return mockTasks
  }
}

export const taskRepository = new TaskHttpRepository()
