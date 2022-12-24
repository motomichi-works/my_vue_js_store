<script lang="ts">
</script>

<script setup lang="ts">
import { useHogeStore } from '../../../stores/HogeStore';
const hogeStore = useHogeStore();
</script>

<template>
<div class="org02">
  <h2>org02</h2>
  <ul>
    <li v-for="item in hogeStore.state.list" :key="item.id">
      {{ item.name }}
    </li>
  </ul>
</div>
</template>

<style scoped>
.org02 {
  font-size: 16px;
}
</style>