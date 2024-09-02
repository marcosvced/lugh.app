import type { Amount } from '@/lib/core/amount/domain/entities/Amount'

export interface PriceModel {
  amount: Amount
  percentage: number
  date: Date
}

export class Price implements PriceModel {
  amount: Amount
  date: Date
  percentage: number

  constructor({ amount, date, percentage }: PriceModel) {
    this.amount = amount
    this.date = new Date(date)
    this.percentage = percentage
  }
}
