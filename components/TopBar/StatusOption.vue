<template>
  <div class="flex items-center w-full h-5 rounded-sm bg-white text-charcoal overflow-hidden">
    <div class="flex border-r border-black">
      <button class="flex items-center justify-center bg-teal border-r text-white w-4" @click="decreaseStatus">
        -
      </button>

      <button class="flex items-center justify-center bg-teal text-white w-4" @click="increaseStatus">
        +
      </button>
    </div>

    <div class="flex w-full justify-between items-center mr-3">
      <span class="pl-2 pr-4 font-semibold">
        {{ name }}
      </span>

      <div class="flex justify-end items-center h-5">
        <input v-model="inflictionAmt" min="0" type="number" class="text-center px-1 w-6 text-charcoal bg-white" @change="setAmt" />
        <span class="mr-1">
          /
        </span>
        <div class="font-bold w-3 text-right">
          {{ resistance }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as utils from '@/mixins/utils'
import { usePlayerStore } from '~~/store/player'

const props = defineProps({
  name: {
    type: String,
    default: ''
  },
})

const playerStore = usePlayerStore()

const inflictionAmt = shallowRef(0)

const resistance = computed(()=>{
  if (props.name === 'Curse') return 10
  else if (props.name === 'Frost' || props.name === 'Bleed') return 10 + utils.statMod(playerStore.CharacterStats.Stats.Strength) + (playerStore.UserInputValues.BonusStatuses as any)[props.name]
  else if (props.name === 'Poison' || props.name === 'Toxic') return 10 + utils.statMod(playerStore.CharacterStats.Stats.Intelligence) + (playerStore.UserInputValues.BonusStatuses as any)[props.name]
  else if (props.name === 'Poise') {
    if (playerStore.CharacterStats.Stats.Endurance >= 10) return playerStore.CharacterStats.Stats.Endurance - 5
    else return 5
  }
})

function setAmt() {
  if (!inflictionAmt.value) inflictionAmt.value = 0
}

function increaseStatus() {
  inflictionAmt.value = utils.increaseValue(inflictionAmt.value)
}

function decreaseStatus() {
  inflictionAmt.value = utils.decreaseValue(inflictionAmt.value, 0)
}
</script>