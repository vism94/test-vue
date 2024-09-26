<script lang="ts" setup>
import { ref, computed } from 'vue'; // Добавляем импорт computed
import { useSearchStore } from '@/stores/search';
import SearchResult from '@/components/SearchResult.vue';

const query = ref('');
const searchStore = useSearchStore();

const handleKeyup = async () => {
  if (query.value.length > 2) {
    await searchStore.fetchResults(query.value);
  }
};

const searchResults = computed(() => searchStore.results); // Использование computed для реактивных данных
</script>

<template>
  <div>
    <input
        v-model="query"
        @keyup="handleKeyup"
        placeholder="Search for a location"
        class="search-input"
    />
    <ul>
      <li v-for="result in searchResults" :key="result.place_id">
        <SearchResult :result="result" />
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.search-input {
  // стили для поля поиска
}
</style>
