<script setup lang="ts">
import List from './list.vue'

const props = defineProps<{
    item: string[] | string,
    blocks: any[],
    sum: number,
}>()

const block = props.blocks.find(block => {
  return block.id === props.item
})

function isArray (item: any) {
  return Array.isArray(item);
}
</script>

<template>
  <div v-if="isArray(item)" class="item"><List :flex="item as string[]" :blocks="props.blocks"></List></div>
  <div v-else class="item" >
    <div v-html="block.content"></div>
  </div>
</template>

<style scoped>
.item {
  flex: 1 1 auto;
}
</style>