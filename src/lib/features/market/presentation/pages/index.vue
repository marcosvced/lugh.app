<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useMoney } from '@/lib/hooks/useMoney'
import { Container } from '@/lib/core/utils/Container'
import type { MarketBloc } from '@/lib/features/market/presentation/bloc/Market.bloc'
import { useBLoC } from '@/lib/hooks/useBLoC'
import type { MarketState } from '@/lib/features/market/presentation/bloc/Market.state'
import { MarketEvents } from '@/lib/features/market/presentation/bloc/Market.events'
import O_DefaultLayout from '@/lib/ui/components/organisms/O_DefaultLayout.vue'

const bloc = Container.get<MarketBloc>('market_bloc')
const state = useBLoC<MarketState>(bloc)

onBeforeMount(async () => {
  await bloc.dispatch(MarketEvents.GetCurrentMarket)
})
</script>

<template>
  <O_DefaultLayout>
    <template #default>
      <p v-if="state.isLoading">
        Loading...
      </p>
      <p v-else-if="0 < state.errors.length">
        {{ state.errors }}
      </p>
      <ul v-else-if="state.data">
        <li v-for="(price, index) in state.data.prices" :key="`${price.amount}_${index}`">
          <span>{{ useMoney(price.amount) }}</span>
        </li>
      </ul>
    </template>
  </O_DefaultLayout>
</template>

<style scoped>

</style>
