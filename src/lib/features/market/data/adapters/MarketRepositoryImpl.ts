import type { MarketRepository } from '@/lib/features/market/domain/ports/MarketRepository'
import type { MarketModel } from '@/lib/features/market/domain/entities/Market'
import { Market } from '@/lib/features/market/domain/entities/Market'
import type { MarketDto } from '@/lib/features/market/data/dto/Market.dto'
import { UnexpectedException } from '@/lib/core/utils/GenericException'
import { inject } from '@/lib/core/utils/Container'

export class MarketRepositoryImpl implements MarketRepository {
  @inject('api')
  private readonly api: Api

  async getCurrentMarket(): Promise<Market> {
    const response = await this.api.get<MarketDto>({
      url: '/v1/market/prices',
    })
    if (!response) {
      throw UnexpectedException()
    }
    let market: Market
    response.fold(() => {
      throw UnexpectedException()
    }, ({ response }) => {
      market = new Market(<MarketModel>response)
    })
    return Promise.resolve(market)
  }
}
