<script setup lang="ts">
import '@material/web/icon/icon.js'

interface Props {
  label: string
}

withDefaults(defineProps<Props>(), {})
</script>

<template>
  <span class="a-icon">
    <md-icon filled>{{ label }}</md-icon>
  </span>
</template>

<style scoped>
.material-symbols-outlined {
  font-variation-settings:
      'FILL' 1,
      'wght' 400,
      'GRAD' 0,
      'opsz' 24
}
.a-icon {
  display: flex;
  height: 1em;
  width: 1em;
  line-height: 1em;
  --md-icon-size: 1em;
}
</style>
