import { BLoC } from '@/lib/core/utils/BLoC'
import { MarketState } from '@/lib/features/market/presentation/bloc/Market.state'
import { MarketEvents } from '@/lib/features/market/presentation/bloc/Market.events'
import { UnexpectedException } from '@/lib/core/utils/GenericException'
import type { UseCase } from '@/lib/core/utils/UseCase'
import { inject } from '@/lib/core/utils/Container'

export class MarketBloc extends BLoC<MarketState, MarketEvents> {
  @inject('market_get_current_market_use_case')
  private readonly getCurrentMarketAction: UseCase

  constructor() {
    super(new MarketState({}))
  }

  async dispatch(event: MarketEvents): Promise<void> {
    this.isLoading = true
    switch (event) {
      case MarketEvents.GetCurrentMarket:
        await this._getMarketAction()
        break
    }
    this.isLoading = false
  }

  private async _getMarketAction() {
    try {
      const data = await this.getCurrentMarketAction.execute()
      this.state = new MarketState({ data })
    }
    // eslint-disable-next-line unused-imports/no-unused-vars
    catch (error) {
      this.isLoading = false
      this.error = UnexpectedException()
    }
  }
}
