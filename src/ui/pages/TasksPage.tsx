import { Button, Flex } from 'antd'
import { PlusOutlined, ReloadOutlined } from '@ant-design/icons'
import { useTasksQuery } from '@/application/task/queries/useTasksQuery'
import { PageShell } from '@/ui/components/PageShell'
import { TaskTable } from '@/ui/components/TaskTable'

export const TasksPage = () => {
  const { data, isLoading, isFetching, refetch } = useTasksQuery()

  return (
    <PageShell
      title="Задачи команды"
      subtitle="Пример фичи с разделением по DDD: domain → application → infrastructure → ui"
      actions={
        <Flex gap="small">
          <Button icon={<PlusOutlined />} type="primary" disabled>
            Новая задача
          </Button>
          <Button
            icon={<ReloadOutlined />}
            onClick={() => refetch()}
            loading={isFetching}
          >
            Обновить
          </Button>
        </Flex>
      }
    >
      <TaskTable data={data} loading={isLoading} />
    </PageShell>
  )
}
