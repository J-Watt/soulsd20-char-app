<template>
  <div class="flex items-center w-full rounded-sm text-lg font-bold bg-white overflow-hidden">
    <div class="flex items-center border-black">
      <span class="text-center w-8">
        {{ feat.cost }}
      </span>
    </div>

    <div class="flex w-full justify-between items-center mr-3 border-l">
      <span class="py-1 pl-3 pr-2">
        {{ feat.name }}
      </span>

      <button class="font-bold text-lg" @click="showFeat">
        >
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  feat: {
    type: Object,
    default: {}
  }
})

const emit = defineEmits(['expand'])

function showFeat() {
  emit('expand')
}
</script>