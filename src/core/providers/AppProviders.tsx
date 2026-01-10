import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ConfigProvider, theme as antdTheme } from 'antd'
import ruRU from 'antd/locale/ru_RU'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import type { ReactNode } from 'react'
import { queryClient } from '@/shared/config/queryClient'
import { ServiceContainerProvider } from './ServiceContainerProvider'

dayjs.locale('ru')

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <ConfigProvider
      locale={ruRU}
      theme={{
        algorithm: antdTheme.defaultAlgorithm,
        token: {
          colorPrimary: '#1677ff',
          fontFamily: "Inter, 'Segoe UI', sans-serif",
          borderRadius: 8,
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <ServiceContainerProvider>{children}</ServiceContainerProvider>
        <ReactQueryDevtools
          initialIsOpen={false}
          buttonPosition="bottom-left"
        />
      </QueryClientProvider>
    </ConfigProvider>
  )
}
