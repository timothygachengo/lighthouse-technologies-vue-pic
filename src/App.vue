<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

:root {
  --primary-color: #1a1a1a;
  --bg-color: #0f0f0f;
  --bg-secondary-color: #1a1a1a;
  --primary-text-color: #ebd193;
  --border-color: #8b8780;
  --border-radius: 10px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
    Segoe UI, Arial, Roboto, PingFang SC, miui, Hiragino Sans GB,
    Microsoft Yahei, sans-serif;
}

body {
  background-color: #1a1a1a;
}

button {
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  user-select: none;
}

img {
  user-select: none;
  pointer-events: none;
}

[v-cloak] {
  display: none;
}
</style>
