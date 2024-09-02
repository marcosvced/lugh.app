import type { Price } from '@/lib/core/price/domain/entities/Price'
import type { Period } from '@/lib/features/market/presentation/models/Period'

export function useFilterByTimePeriod(prices: Price[], period: Period) {
  return prices.filter(({ date }) => {
    const hour = date.getHours()
    return hour >= period.startHour && hour < period.endHour
  })
}
