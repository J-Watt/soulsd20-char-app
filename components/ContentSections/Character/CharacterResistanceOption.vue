<template>
  <div class="flex justify-between items-center w-full rounded-sm bg-white text-charcoal overflow-hidden">
    <div class="flex h-full border-r border-black">
      <button
        class="flex items-center justify-center bg-blue-900 border-r text-white w-4"
        @click="decreasePlayerStat"
      >
        -
      </button>

      <button
        class="flex items-center justify-center bg-blue-900 text-white w-4"
        @click="increasePlayerStat"
      >
        +
      </button>
    </div>

    <div class="flex w-full justify-between items-center">
      <span class="pl-2 pr-4 font-semibold">
        {{ name }}
      </span>

      <input
        v-model="stat"
        type="number"
        :min="min"
        class="px-1 w-6 text-center text-charcoal"
        @change="setAmt"
      />
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
  },
  min: {
    Type: Number,
    default: undefined
  }
})

const stat = shallowRef(props.statAmount)

function setAmt() {
  if (!stat.value) stat.value = 0
  updatePlayerValue('set')
}

function decreasePlayerStat() {
  updatePlayerValue('decrease')
}

function increasePlayerStat() {
  updatePlayerValue('increase')
}

function updatePlayerValue(type?: string) {
  if (type !== 'set') {
    stat.value = type === 'increase' ? utils.increaseValue(stat.value) : utils.decreaseValue(stat.value, props.min)
  }

  if (props.sType === 'resistance') (playerStore.UserInputValues.BonusResistances as any)[props.identifier] = stat.value
  else if (props.sType === 'status') (playerStore.UserInputValues.BonusStatuses as any)[props.identifier] = stat.value
}
</script>