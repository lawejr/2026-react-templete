import { Card, Typography } from 'antd'
import type { ReactNode } from 'react'

type Props = {
  title: string
  subtitle?: string
  actions?: ReactNode
  children: ReactNode
}

export const PageShell = ({ title, subtitle, actions, children }: Props) => {
  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <Typography.Title level={3} className="!mb-1">
            {title}
          </Typography.Title>
          {subtitle ? (
            <Typography.Text type="secondary">{subtitle}</Typography.Text>
          ) : null}
        </div>
        {actions}
      </div>
      <Card className="shadow-sm" styles={{ body: { padding: '20px' } }}>
        {children}
      </Card>
    </div>
  )
}
