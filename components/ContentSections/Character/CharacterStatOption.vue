<template>
  <div class="flex items-center w-full rounded-sm text-lg bg-white overflow-hidden">
    <div class="flex items-center border-r border-black">
      <div class="flex flex-col">
        <button class="flex items-center justify-center bg-blue-900 border-b text-white w-5 h-5" @click="increasePlayerStat">
          +
        </button>

        <button class="flex items-center justify-center bg-blue-900 text-white w-5 h-5"  @click="decreasePlayerStat">
          -
        </button>
      </div>

      <span class="mx-3">
        {{ stat }}
      </span>
    </div>

    <div class="flex w-full justify-between items-center mr-3">
      <span class="py-1 pl-3 pr-2 font-bold">
        {{ name }}
      </span>

      <div class="flex justify-end items-center w-8 h-5">
        <span class="text-sm mr-2">
          Mod: 
        </span>

        <span class="font-bold">
          {{ mod }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as utils from '@/mixins/utils'
import { usePlayerStore } from '@/store/player'

const playerStore = usePlayerStore()

const props = defineProps({
  name: {
    Type: String,
    default: ''
  },
  identifier: {
    Type: String,
    default: ''
  },
  sType: {
    Type: String,
    default: ''
  },
  statAmount: {
    Type: Number,
    default: 0
  }
})

const stat = shallowRef(props.statAmount)
const mod = computed(()=>{
  if (props.sType === 'stat') {
    return utils.statMod(stat.value)
  } else if (props.sType === 'skill') {
    return props.statAmount + utils.skillModBonusFromStats(props.identifier)
  }

  return stat.value
})

function increasePlayerStat() {
  updatePlayerStat(1)
}

function decreasePlayerStat() {
  updatePlayerStat(-1)
}

function updatePlayerStat(amount: number) {
  stat.value += amount
  if (props.sType === 'skill') (playerStore.CharacterStats.Skills as any)[props.identifier] = stat.value
  else if (props.sType === 'stat') (playerStore.CharacterStats.Stats as any)[props.identifier] = stat.value
  else if (props.sType === 'knowledge') (playerStore.CharacterStats.Knowledge as any)[props.identifier] = stat.value
}
</script>