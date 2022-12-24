<template>
<div class="custom-layout">
  <div>custom-layout</div>
  <ul>
    <li
      v-for="(item, index) in [
        { name: 'home', path: '/'},
        { name: 'hello', path: '/hello'},
      ]"
      :key="index"
    >
      <NuxtLink :to="item.path">{{ item.name }}</NuxtLink>
    </li>
  </ul>
  
  <slot />
</div>
</template>