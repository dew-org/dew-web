/* eslint-disable no-unused-vars */
export enum Frequency {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  YEARLY = 'yearly',
}

export type Analytics = {
  date: number
  frequency: Frequency

  invoices: number
  sales: number
  customers: number
  products: number

  userId: string
}
