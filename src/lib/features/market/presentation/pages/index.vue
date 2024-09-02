<script setup lang="ts">
import { onMounted } from 'vue'

import { Container } from '@/lib/core/utils/Container'
import type { MarketBloc } from '@/lib/features/market/presentation/bloc/Market.bloc'
import { useBLoC } from '@/lib/hooks/useBLoC'
import type { MarketState } from '@/lib/features/market/presentation/bloc/Market.state'
import { MarketEvents } from '@/lib/features/market/presentation/bloc/Market.events'
import O_DefaultLayout from '@/lib/ui/components/organisms/O_DefaultLayout.vue'
import A_CircularProgress from '@/lib/ui/components/atoms/progress/A_CircularProgress.vue'
import MarketGraph from '@/lib/features/market/presentation/pages/components/MarketGraph.vue'

const bloc = Container.get<MarketBloc>('market_bloc')
const state = useBLoC<MarketState>(bloc)

onMounted(async () => {
  await bloc.dispatch(MarketEvents.GetCurrentMarket)
})
</script>

<template>
  <O_DefaultLayout>
    <template #default>
      <A_CircularProgress v-if="state.isLoading" />
      <MarketGraph v-else-if="state.data" :market="state.data" />
    </template>
  </O_DefaultLayout>
</template>

<style scoped>

</style>
