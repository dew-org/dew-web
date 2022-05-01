export type SidebarRoute = {
  title: string
  subtitle?: string
  open?: boolean
  path?: string
  routes?: SidebarRoute[]
}
