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
  height: 64px;
  padding-inline: 4px;
  padding-block: 8px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 24px;
  top: 0;
  background-color: #FEF7FF;

  > .top-bar__icon-wrapper {
    padding: 10px;
  }
  > span.top-bar__title {
    font-size: 22px;
  }
}
</style>
