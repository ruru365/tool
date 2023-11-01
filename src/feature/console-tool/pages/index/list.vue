<script setup lang="ts">
import ListItem from './list-item.vue'
const props = defineProps<{
  blocks: string[],
  flex: string[]
}>()
const list = props.flex.slice(1, props.flex.length)
const sum = list.length;
const type = props.flex[0]
</script>

<template>
  <div class="list" :class="type">
    <ListItem v-for="item in list" :sum="sum" :item="item" :blocks="blocks"></ListItem>
  </div>
</template>

<style scoped>
.list {
  display: flex;
  height: 100%;
}
.row{
  flex-direction:row;
}
.col{
  flex-direction:column;
}
</style>