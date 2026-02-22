import { Layout, Typography } from 'antd'
import classNames from 'classnames'
import { Navigate, Route, Routes } from 'react-router-dom'
import { routes } from '@/shared/config/routes'
import { TasksPage } from '@/ui/pages/TasksPage'

const { Header, Content } = Layout

const shellClass = classNames('min-h-screen', 'bg-slate-50')

const App = () => {
  return (
    <Layout className={shellClass}>
      <Header className="bg-white shadow-sm px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-blue-600 text-white grid place-items-center font-semibold">
            DF
          </div>
          <div>
            <Typography.Title level={4} className="!mb-0">
              DF Admin
            </Typography.Title>
            <Typography.Text type="secondary">
              React + Vite + DDD
            </Typography.Text>
          </div>
        </div>
      </Header>
      <Content className="px-6 py-6">
        <Routes>
          <Route
            path={routes.root}
            element={<Navigate to={routes.demoTasks} replace />}
          />
          <Route path={routes.demoTasks} element={<TasksPage />} />
        </Routes>
      </Content>
    </Layout>
  )
}

export default App
