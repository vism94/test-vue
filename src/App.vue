<script setup lang="ts">
import { ref } from 'vue';
import Search from './components/Search.vue';

const searchQuery = ref('');
</script>

<template>
  <div id="app">
    <h1>Search App</h1>
    <Search v-model="searchQuery" />
  </div>
</template>

<style scoped lang="scss">
#app {
  text-align: center;
  font-family: Arial, sans-serif;
  padding: 20px;

  h1 {
    color: #333;
  }
}
</style>
