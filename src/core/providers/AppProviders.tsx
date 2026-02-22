import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ConfigProvider } from 'antd'
import ruRU from 'antd/locale/ru_RU'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import { ReactNode, useEffect } from 'react'
import { queryClient } from '@/shared/config/queryClient'
import { applyPaletteCssVariables, appTheme } from '@/shared/config/theme'
import { ServiceContainerProvider } from './ServiceContainerProvider'

dayjs.locale('ru')

export const AppProviders = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    applyPaletteCssVariables()
  }, [])

  return (
    <ConfigProvider locale={ruRU} theme={appTheme}>
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
