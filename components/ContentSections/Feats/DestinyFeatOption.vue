<template>
  <div class="flex items-center w-full rounded-sm text-lg font-bold bg-white overflow-hidden">
    <div class="flex items-center border-r border-black">
      <span class="mx-3">
        {{ feat.Cost }}
      </span>
    </div>

    <div class="flex w-full justify-between items-center mr-3">
      <span class="py-1 pl-3 pr-2">
        {{ feat.Name }}
      </span>

      <button class="font-bold text-lg" @click="showFeat">
        >
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from "~~/store/player"

const props = defineProps({
  feat: {
    type: Object,
    default: {}
  }
})

const emit = defineEmits(['expand'])

const store = usePlayerStore()

function showFeat() {
  emit('expand')
}
</script>