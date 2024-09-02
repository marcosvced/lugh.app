<script setup lang="ts">
import M_TopBar from '@/lib/ui/components/molecules/top-bar/M_TopBar.vue'
</script>

<template>
  <main>
    <M_TopBar />
    <slot />
  </main>
</template>

<style scoped>
main {
  padding-top: 76px;
  padding-inline: 12px;
  padding-bottom: 12px;
}
</style>
