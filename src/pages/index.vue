<script lang="ts">

import Org01 from '../manual-components/index/org/Org01.vue'
import Org02 from '../manual-components/index/org/Org02.vue'

export default defineComponent({
  components: {
    Org01,
    Org02,
  },
});
</script>

<script setup lang="ts">
import { createHogeStore, useHogeStore } from '../stores/HogeStore';
createHogeStore();
const hogeStore = useHogeStore();
await hogeStore.actions.reloadList();

const pageName = 'index-page';
</script>

<template>
  <div class="index-page">
    <div></div>{{ pageName }}
    <Org01 />
    <Org02 />
  </div>
</template>

<style scoped>
.index-page {
  font-size: 16px;
}
</style>
