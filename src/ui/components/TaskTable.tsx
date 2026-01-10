import { Table, Tag, Typography } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import type { Task } from '@/domain/task/task'

const formatDate = (value: string) => {
  try {
    return format(new Date(value), 'd MMM', { locale: ru })
  } catch {
    return value
  }
}

const statusConfig: Record<Task['status'], { label: string; color: string }> = {
  todo: { label: 'Todo', color: 'default' },
  in_progress: { label: 'In progress', color: 'blue' },
  done: { label: 'Done', color: 'green' },
}

type Props = {
  data?: Task[]
  loading?: boolean
}

export const TaskTable = ({ data, loading }: Props) => {
  const columns: ColumnsType<Task> = [
    {
      title: 'Task',
      dataIndex: 'title',
      key: 'title',
      render: (title: string, record) => (
        <div className="flex flex-col">
          <Typography.Text className="!text-slate-900" strong>
            {title}
          </Typography.Text>
          <Typography.Text type="secondary" className="!text-xs">
            Owned by {record.assignee}
          </Typography.Text>
          {record.tags?.length ? (
            <div className="flex flex-wrap gap-2 pt-2">
              {record.tags.map(tag => (
                <Tag key={tag} color="geekblue" className="!text-xs">
                  {tag}
                </Tag>
              ))}
            </div>
          ) : null}
        </div>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: Task['status']) => {
        const config = statusConfig[status]
        return <Tag color={config.color}>{config.label}</Tag>
      },
    },
    {
      title: 'Due date',
      dataIndex: 'dueDate',
      key: 'dueDate',
      render: (date: string) => (
        <Typography.Text className="!text-slate-800">
          {formatDate(date)}
        </Typography.Text>
      ),
    },
  ]

  return (
    <Table
      columns={columns}
      dataSource={data}
      loading={loading}
      rowKey={record => record.id}
      pagination={false}
    />
  )
}
