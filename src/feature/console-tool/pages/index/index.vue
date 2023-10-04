<script lang="ts" src="./index.ts"></script>

<template>
  <div class="main">
    <div class="hide-iframe-box" ref="iframe"></div>
    <div class="left">
      <div class="menu">
        <button @click="run()">RUN</button>
      </div>
      <div class="editor" ref="editor"></div>
    </div>
    <div class="right">
      <div class="result"></div>
    </div>
  </div>
</template>

<style scoped>
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
  background-color: #4c4c4c;
  height: 400px;
}

.hide-iframe-box {
  display: none;
}
</style>
