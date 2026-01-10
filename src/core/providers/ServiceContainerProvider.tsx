import { createContext, useContext, type ReactNode } from 'react'
import { TaskService } from '@/application/task/taskService'
import { taskRepository } from '@/infrastructure/task/taskRepository'

export type ServiceContainer = {
  taskService: TaskService
}

const defaultContainer: ServiceContainer = {
  taskService: new TaskService(taskRepository),
}

const ServiceContainerContext =
  createContext<ServiceContainer>(defaultContainer)

export const ServiceContainerProvider = ({
  children,
  container = defaultContainer,
}: {
  children: ReactNode
  container?: ServiceContainer
}) => (
  <ServiceContainerContext.Provider value={container}>
    {children}
  </ServiceContainerContext.Provider>
)

export const useServices = () => useContext(ServiceContainerContext)
