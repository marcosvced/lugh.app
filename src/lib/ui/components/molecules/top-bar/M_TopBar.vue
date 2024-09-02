<script setup>
import A_Icon from '@/lib/ui/components/atoms/icon/A_Icon.vue'
</script>

<template>
  <teleport to="body">
    <header class="m-top-bar">
      <div class="top-bar__icon-wrapper">
        <A_Icon label="menu" />
      </div>
    </header>
  </teleport>
</template>

<style scoped>
header {
  position: fixed;
  width: 100%;
  height: var(--s-64px);
  padding-inline: var(--s-4px);
  padding-block: var(--s-8px);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: var(--s-24px);
  top: 0;

  > .top-bar__icon-wrapper {
    padding: var(--s-12px);
  }
}
</style>
