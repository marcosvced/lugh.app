import type { UseCase } from '@/lib/core/utils/UseCase'
import type { MarketRepository } from '@/lib/features/market/domain/ports/MarketRepository'
import type { Market } from '@/lib/features/market/domain/entities/Market'
import { inject } from '@/lib/core/utils/Container'

export class GetCurrentMarketAction implements UseCase {
  @inject('market_repository')
  private readonly repository: MarketRepository

  execute(): Promise<Market> {
    return this.repository.getCurrentMarket()
  }
}
