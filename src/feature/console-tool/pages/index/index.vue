<script lang="ts" src="./index.ts"></script>

<template>
  <input class="search" type="text" ref="searchDom" @keypress.enter="search()" v-model="searchText"/>
  <div class="main">
    <div class="hide-iframe-box" ref="iframe"></div>
    <div class="left">
      <div class="menu">
        <button @click="run()">RUN</button>
      </div>
      <div class="editor" ref="editor"></div>
    </div>
    <div class="right">
      <div class="menu">
        <button @click="run()">COPY</button>
      </div>
      <div class="result" ref="result"></div>
    </div>
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
  display: flex;
}

.left {
  flex: 0 0 50%;
}

.right {
  flex: 0 0 50%;
}

.editor {
  border: 1px solid #ccc;
}

.result {
  border: 1px solid #ccc;
}

.hide-iframe-box {
  display: none;
}
</style>
