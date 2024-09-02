import type { EnergyMeasure } from '@/lib/features/market/domain/models/EnergyMeasure'
import { Price } from '@/lib/core/price/domain/entities/Price'

export function useMeasureFormat(measure: EnergyMeasure, price: Price) {
  return new Price({ ...price, amount: { value: price.amount.value / measure.value, currency: price.amount.currency } })
}
