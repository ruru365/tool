<script lang="ts" src="./index.ts"></script>

<template>
  <input class="search" type="text" ref="searchDom" @keypress.enter="search()" v-model="searchText"/>
  <div class="main">
    <List :flex="blockConfig.flexData" :blocks="blockConfig.blocks"></List>
  </div>
</template>

<style scoped>
.search{
  margin: 10px auto;
  height: 30px;
  line-height: 30px;
  display: block;
  border: 1px solid #ccc;
  outline: none;
  padding: 0 10px;
  border-radius: 5px;
  width: 600px;
  font-size: 16px;
}
.main {
  position: absolute;
  top: 50px;
  bottom: 0px;
  left: 0px;
  right: 0px;
}
</style>
