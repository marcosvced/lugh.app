<script setup lang="ts">
import '@material/web/labs/segmentedbutton/outlined-segmented-button.js'
import '@material/web/labs/segmentedbuttonset/outlined-segmented-button-set.js'

interface Props {
  options: {
    label: string
    onClick?: () => void
  }[]
}

withDefaults(defineProps<Props>(), {})
</script>

<template>
  <md-outlined-segmented-button-set>
    <template v-for="(option, index) in options" :key="index">
      <md-outlined-segmented-button no-checkmark :selected="0 === index" :label="option.label" @click="option.onClick" />
    </template>
  </md-outlined-segmented-button-set>
</template>

<style scoped>

</style>
