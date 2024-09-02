<script setup lang="ts">
</script>

<template>
  <div class="o_card">
    <div v-if="$slots.head" class="card__head">
      <slot name="head" />
    </div>
    <div class="card__content">
      <slot name="content" />
    </div>
    <div v-if="$slots.footer" class="card__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<style scoped>
.o_card {
  border-radius: var(--s-32px);
  background-color: var(--c-ash-tone-500);
}

.card__head,
.card__content,
.card__footer {
  padding: var(--s-24px);
}
.card__content.-stretched {
  padding: 0;
}
</style>
