<script setup lang="ts">
import type { ComputedRef } from 'vue'
import { computed, ref } from 'vue'
import { BarChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'
import annotationPlugin from 'chartjs-plugin-annotation'
import { Price } from '@/lib/core/price/domain/entities/Price'
import M_SegmentedButton from '@/lib/ui/components/molecules/segmented-button/M_SegmentedButton.vue'
import type { Market } from '@/lib/features/market/domain/entities/Market'
import O_Card from '@/lib/ui/components/organisms/O_Card.vue'
import { useLocaleTime } from '@/lib/hooks/useLocaleTime'
import { useMoney } from '@/lib/hooks/useMoney'
import { useMeasureFormat } from '@/lib/hooks/useMeasureFormat'
import { EnergyMeasures } from '@/lib/features/market/domain/models/EnergyMeasure'
import { useFilterByTimePeriod } from '@/lib/features/market/presentation/hooks/useFilterByTimePeriod'
import type { PeriodGroup } from '@/lib/features/market/presentation/models/PeriodGroup'

interface Props {
  market: Market
}

const { market } = withDefaults(defineProps<Props>(), {})

const groups: PeriodGroup = {
  night: { startHour: 0, endHour: 8 },
  morning: { startHour: 8, endHour: 16 },
  afternoon: { startHour: 16, endHour: 24 },
}

const selectedPeriod = ref(groups.night)
const period: ComputedRef<Price[]> = computed(() => useFilterByTimePeriod(market.prices, selectedPeriod.value))

const minPrice = Math.min(...market.prices.map(price => price.amount.value))

const segmentedButtons = [
  {
    label: '🌕 Night',
    onClick: () => selectedPeriod.value = groups.night,
  },
  {
    label: '☀️ Morning',
    onClick: () => selectedPeriod.value = groups.morning,
  },
  {
    label: '🌙 Afternoon',
    onClick: () => selectedPeriod.value = groups.afternoon,
  },
]

Chart.register(...registerables)
Chart.register(annotationPlugin)

const chartData = computed(() => {
  const labels = period.value.map(price => useLocaleTime(price.date))
  const data = period.value.map(price => price.amount.value)

  return {
    datasets: [
      {
        borderRadius: 6,
        backgroundColor: '#E1EB8E',
        barThickness: 12,
        borderSkipped: false,
        base: 0,
        data,
      },
    ],
    labels,
  }
})

const chartOptions = {
  indexAxis: 'y',
  scales: {
    y: {
      border: { display: false },
      grid: { display: false },
      ticks: {
        color: '#E1DBC7',
        font: {
          size: 14,
          family: 'monospace',
        },
      },
    },
    x: {
      border: { display: false },
      grid: {
        color: '#4D504C',

      },
      ticks: {
        color: '#E1DBC7',
        font: {
          size: 14,
          family: 'monospace',
        },
        callback(value) {
          const kwh = useMeasureFormat(EnergyMeasures.KWh, new Price({
            amount: { value, currency: 'EUR' },
            percentage: 0,
            date: new Date(),
          }))
          return useMoney(kwh.amount)
        },
      },
    },
  },
  plugins: {
    legend: { display: false },
    annotation: {
      annotations: {
        line1: {
          type: 'line',
          xMin: minPrice,
          xMax: minPrice,
          borderColor: '#8f8f4e',
          borderWidth: 1,
          borderDash: [5, 5],
        },
      },
    },
  },
}
</script>

<template>
  <div class="market-graph">
    <M_SegmentedButton :options="segmentedButtons" class="-m-b(6)" />
    <O_Card>
      <template #content>
        <BarChart :chart-data="chartData" :options="chartOptions" />
      </template>
    </O_Card>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
