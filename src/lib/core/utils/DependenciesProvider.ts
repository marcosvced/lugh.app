import { Container } from '@/lib/core/utils/Container'
import { ApiClient } from '@/lib/core/api/data/adapters/ApiClient'
import { MarketRepositoryImpl } from '@/lib/features/market/data/adapters/MarketRepositoryImpl'
import { GetCurrentMarketAction } from '@/lib/features/market/domain/actions/GetCurrentMarket.action'
import { MarketBloc } from '@/lib/features/market/presentation/bloc/Market.bloc'

export type Dependency =
  'api' |
  'market_repository' |
  'market_get_current_market_use_case' |
  'market_bloc'

export class DependenciesProvider {
  constructor() {
    Container.set('api', new ApiClient(import.meta.env.VITE_APP_API_URL))
  }

  provideMarket() {
    Container.set('market_repository', new MarketRepositoryImpl())
    Container.set('market_get_current_market_use_case', new GetCurrentMarketAction())
    Container.set('market_bloc', new MarketBloc())
  }
}
