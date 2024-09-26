<template>
  <div class="result-item">
    <p>{{ result.display_name }}</p>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  result: Object
});
</script>

<style scoped lang="scss">
.result-item {
  // стили для результата
}
</style>
