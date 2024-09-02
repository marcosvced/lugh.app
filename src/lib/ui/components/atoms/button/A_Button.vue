<script setup lang="ts">
import '@material/web/button/filled-tonal-button.js'
import '@material/web/button/filled-button.js'

interface Props {
  variant: 'primary' | 'secondary'
}

withDefaults(defineProps<Props>(), {})
</script>

<template>
  <template v-if="variant === 'primary'">
    <md-filled-button>
      <slot />
    </md-filled-button>
  </template>
  <template v-else-if="variant === 'secondary'">
    <md-filled-tonal-button>
      <slot />
    </md-filled-tonal-button>
  </template>
</template>

<style scoped>

</style>
