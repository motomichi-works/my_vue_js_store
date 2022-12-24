<script lang="ts">
</script>

<script setup lang="ts">
import { useHogeStore } from '../../../stores/HogeStore';

const hogeStore = useHogeStore();
const onClickHogeItemAddButton = () => {
  const lastItem = hogeStore.state.list[hogeStore.state.list.length - 1];
  hogeStore.mutations.pushToList({ id: lastItem.id + 1, name: 'newItem' });
};
</script>

<template>
<div class="org01">
  <h2>Org01</h2>
  <button @click="onClickHogeItemAddButton">AddHogeItem</button>
</div>
</template>

<style scoped>
.org01 {
  font-size: 16px;
}
</style>