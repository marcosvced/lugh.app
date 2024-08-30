import { DependenciesProvider } from '@/lib/core/utils/DependenciesProvider'

function provideDependencies() {
  const provider = new DependenciesProvider()
  provider.provideMarket()
}
export default provideDependencies
