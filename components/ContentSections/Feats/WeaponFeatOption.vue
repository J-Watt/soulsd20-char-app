<template>
  <div class="flex items-center w-full rounded-sm text-lg font-bold bg-white overflow-hidden h-[60px]">
    <div class="flex items-center border-r border-black h-full">
      <div class="flex flex-col h-full">
        <button class="flex items-center justify-center bg-teal border-b text-sm text-white w-5 h-1/2" @click="increaseWeaponProficiency(identifier)">
          +
        </button>

        <button class="flex items-center justify-center bg-teal text-sm text-white w-5 h-1/2"  @click="decreaseWeaponProficiency(identifier)">
          -
        </button>
      </div>

      <span class="mx-3">
        {{ proficiencyAmount }}
      </span>
    </div>

    <div class="flex w-full justify-between items-center mr-3">
      <span class="py-1 pl-3 pr-2 leading-5">
        {{ name }}
      </span>

      <button class="flex items-center justify-center font-bold text-lg" @click="showFeats">
        <UIcon name="i-heroicons-chevron-right" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from "~~/store/player"

const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  identifier: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['expand'])

const store = usePlayerStore()

const proficiencyAmount = computed(()=>{
  return (store.WeaponProficiencies as any)[props.identifier] || 0
})

function increaseWeaponProficiency(wepaonType: string) {
  (store.WeaponProficiencies as any)[wepaonType] += 1
}

function decreaseWeaponProficiency(wepaonType: string) {
  if ((store.WeaponProficiencies as any)[wepaonType] > 0) {
    (store.WeaponProficiencies as any)[wepaonType] -= 1
  }
}

function showFeats() {
  emit('expand', props.identifier)
}
</script>