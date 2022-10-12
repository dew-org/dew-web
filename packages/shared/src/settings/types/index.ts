import { ReactElement } from 'react'

export type SidebarRoute = {
  id?: string
  title: string
  subtitle?: string
  open?: boolean
  path?: string
  icon?: ReactElement
  routes?: SidebarRoute[]
}
