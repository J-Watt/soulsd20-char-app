<template>
  <div id="app">
    <slot />
  </div>
</template>

<script setup>
useHead({
  title: 'Souls D20 Companion'
})
</script>

<style lang="less">
#app {
  font-family: 'EB Garamond';
  width: 100%;
  height: 100vh;

  scrollbar-width: normal;
  scrollbar-color: #777 #555;

  ::-webkit-scrollbar {
    width: 6px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #7775;
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
}

body {
  margin: 0;
  padding: 0;
  background-color: #292c33;
}
</style>