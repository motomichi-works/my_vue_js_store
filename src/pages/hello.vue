<script lang="ts">
definePageMeta({
  layout: 'custom',
});
</script>

<script setup lang="ts">
const pageName = 'hello-page';
</script>

<template>
  <div class="hello-page">
    {{ pageName }}
  </div>
</template>

<style scoped>
.hello-page {
  font-size: 16px;
}
</style>