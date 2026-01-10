import { useQuery } from '@tanstack/react-query'
import { useServices } from '@/core/providers/ServiceContainerProvider'

export const tasksQueryKeys = {
  all: ['tasks'] as const,
}

export const useTasksQuery = () => {
  const { taskService } = useServices()

  return useQuery({
    queryKey: tasksQueryKeys.all,
    queryFn: () => taskService.getTasks(),
  })
}
