import type { DataException } from '@/lib/core/utils/exceptions/DataException'
import type { State } from '@/lib/core/utils/State'
import type { Market } from '@/lib/features/market/domain/entities/Market'

export class MarketState implements State<Market> {
  isLoading: boolean
  errors: DataException[]
  data: Market

  constructor({ errors, isLoading, data }: Partial<MarketState>) {
    this.data = data ?? undefined
    this.isLoading = isLoading ?? false
    this.errors = errors ?? []
  }
}
