import { Price } from '@/lib/core/price/domain/entities/Price'
import type { MarketGroupBy } from '@/lib/features/market/domain/models/MarketGroupBy'
import type { EnergyMeasure } from '@/lib/features/market/domain/models/EnergyMeasure'

export interface MarketModel {
  updatedAt: Date
  groupBy: MarketGroupBy
  energyMeasure?: EnergyMeasure
  prices: Price[]
}

export class Market implements MarketModel {
  updatedAt: Date
  groupBy: MarketGroupBy
  energyMeasure?: EnergyMeasure
  prices: Price[]

  constructor({ updatedAt, groupBy, energyMeasure, prices }: MarketModel) {
    this.updatedAt = new Date(updatedAt)
    this.groupBy = groupBy
    this.energyMeasure = energyMeasure
    this.prices = prices?.map(price => new Price(price))
  }
}
