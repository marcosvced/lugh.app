import type { Market } from '@/lib/features/market/domain/entities/Market'

export interface MarketRepository {
  getCurrentMarket: () => Promise<Market>
}
