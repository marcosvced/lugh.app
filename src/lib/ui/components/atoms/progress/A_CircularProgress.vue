<script setup lang="ts">
import '@material/web/progress/circular-progress.js'
</script>

<template>
  <div class="a_circular-progress">
    <md-circular-progress four-color indeterminate />
  </div>
</template>

<style scoped>
.a_circular-progress {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
