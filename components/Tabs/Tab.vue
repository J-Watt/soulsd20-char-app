<template>
  <button
      class="flex justify-center items-center h-28 w-28 border-r"
      @click="emitTab(tabIdentifier)"
      :class="activeTab === tabIdentifier && 'tabselected'"
    >
      <img
        :src="`./img/icons/${iconName}.png`"
        class="h-20 taboption"
        :class="activeTab === tabIdentifier && 'iconselected'"
        draggable="false"
      />
    </button>
</template>

<script setup lang="ts">
const props = defineProps({
  activeTab: {
    type: String,
    default: 'character'
  },
  tabIdentifier: {
    type: String,
    default: ''
  },
  iconName: {
    type: String,
    default: 'character'
  }
})

const emit = defineEmits(['tab'])

function emitTab(tabOption: string) {
  emit('tab', tabOption)
}
</script>

<style scoped>
  .tabselected {
    background: white;
  }
  .taboption {
    filter: brightness(0) invert(0.9);
  }
  .iconselected {
    filter: none;
  }
</style>